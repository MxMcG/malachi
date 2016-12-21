const AWS  = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const gutil = require('gutil');
const activeProject = require('yargs').argv.project;
const database = require('./database');

/**
 * Takes content of build folder and uploads them to AWS S3 bucket
 * makes distinction between file or folder and then places into bucket
 * TODO need to delete objects such as images if they are deleted in build
 */
const toS3 = (project) => {
  // first fetch current project version number
  database.connectToDB(activeProject, 'fetchProjectVersion', (err, currentProjectVersion) => {
    // existing CDN version is one less than currentProjectVersion bc build has already incremented in db
    const previousVersion = currentProjectVersion - 1;
    if (err) { throw err; }
    else {
      const projectBuildPath = path.resolve(__dirname, '../build', project);
      const s3 = new AWS.S3();
      s3.deleteObject({
        Bucket: 'truvine',
        Key: `projects/${project}_v${previousVersion}`
      }, (err, data) => {
        if (err) console.log('Error deleting project from s3 bucket', err.stack);
        else console.log('Deleted project from s3 bucket', data);
      });
      fs.readdir(projectBuildPath, (err, folderContents) => {
        folderContents.forEach((folderContent) => {
          const folderContentPath = path.join(projectBuildPath, folderContent);
          const isFolder = fs.lstatSync(folderContentPath).isDirectory();
          const isFile = fs.lstatSync(folderContentPath).isFile();
          ///////////////
          // Folder
          ///////////////
          if (isFolder) {
            // path to folder
            const folderPath = path.join(projectBuildPath, folderContent);
            // read contents of folder and upload to s3
            fs.readdir(folderPath, (err, files) => {
              console.log('FILES', files)
              files.forEach((file, index) => {
                const fileInDirectory = path.join(projectBuildPath, folderContent, file);
                const contentType = fileType(file);
                fs.readFile(fileInDirectory, (err, data) => {
                  // take data, push to s3
                  s3.putObject({
                    Bucket: 'truvine',
                    Key: `projects/${project}_v${currentProjectVersion}/${folderContent}/${file}`,
                    Body: data,
                    ACL:'public-read',
                    ContentType: contentType
                  }, (err, file) => {
                    // Log any errors
                    if (err) { gutil.log('Error Uploading File to s3', err); }
                    // If everything went successfully, print which file is being uploaded
                    else { gutil.log('Uploading asset ' + file); }
                  });
                });
              });
            });
            ///////////////
            // File
            ///////////////
          } else if (isFile) {
            // path to file
            const filePath = path.join(projectBuildPath, folderContent);
            const contentType = fileType(filePath);
            // read file and upload to s3
            fs.readFile(filePath, (err, data) => {
              s3.putObject({
                Bucket: 'truvine',
                Key: `projects/${project}_v${currentProjectVersion}/${folderContent}`,
                Body: data,
                ACL:'public-read',
                ContentType: contentType
              }, (err, file) => {
                // Log any errors
                if (err) { gutil.log('Error Uploading File to s3', err); }
                // If everything went successfully, print which file is being uploaded
                else { gutil.log('Uploading asset ' + file); }
              });
            });
          }
        });
      });
    }
  });
}

/**
 * Returns ContentType value for S3 upload, so files do not autodownload in browser
 * Add extensions as needed
 */
const fileType = (file) => {
  const type = path.extname(file);
  switch (type) {
    case '.jpg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.js':
      return 'application/javascript';
    case '.map':
      return 'application/javascript';
  }
}

module.exports = {
  toS3
}
