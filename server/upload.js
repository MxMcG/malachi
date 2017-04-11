const AWS  = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const gutil = require('gutil');
const activeProject = require('yargs').argv.project;
const database = require('./database/index.js');

/**
 * Takes content of build folder and uploads them to AWS S3 bucket
 * makes distinction between file or folder and then places into bucket
 * As of present, everytime new content is uploaded, the project version minus 2 is deleted.
 * This is a problem if someone builds 3 times, does not upload bc only one version will be deleted and others will persist.
 */
const toS3 = (project) => {
  // first fetch current project version number
  database.fetchProjectVersion(activeProject, (err, currentProjectVersion) => {
    // existing CDN version is one less than currentProjectVersion bc build has already incremented in db
    const deletableProjectVersion = (currentProjectVersion > 1) ? currentProjectVersion - 2 : 1;
    const deletableKeyPaths = [];
    gutil.log('Current Project Version: ', currentProjectVersion);

    if (err) { throw err; }
    else {
      const projectBuildPath = path.resolve(__dirname, '../build', project);
      const s3 = new AWS.S3();
      fs.readdir(projectBuildPath, (err, folderContents) => {
        folderContents.forEach((folderContent, outerMostIndex) => {
          // determine if path contains directory or file
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
              console.log('Files in Folder... most likely images', files)
              files.forEach((file, innerIndex) => {
                const fileInDirectory = path.join(projectBuildPath, folderContent, file);
                const keyPath = `projects/${project}_v${currentProjectVersion}/${folderContent}/${file}`;
                const deleteKeyPath = `projects/${project}_v${deletableProjectVersion}/${folderContent}/${file}`;
                const contentType = fileType(file);
                deletableKeyPaths.push({ Key: deleteKeyPath });
                fs.readFile(fileInDirectory, (err, data) => {
                  // take data, push to s3
                  s3.putObject({
                    Bucket: 'truvine',
                    Key: keyPath,
                    Body: data,
                    ACL:'public-read',
                    ContentType: contentType
                  }, (err, file) => {
                    // Log any errors
                    if (err) { gutil.log('Error Uploading File to s3', err); }
                    // If everything went successfully, print which file is being uploaded
                    else {
                      gutil.log('Uploading asset ' + file);
                      // if end of new file uploading, delete old version of objects in S3
                      if (currentProjectVersion > 1 && folderContents[outerMostIndex + 1] === undefined && files[innerIndex + 1] === undefined) {
                        s3deleteObjects(s3, deletableKeyPaths);
                      }
                    }
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
            const keyPath = `projects/${project}_v${currentProjectVersion}/${folderContent}`;
            const deleteKeyPath = `projects/${project}_v${deletableProjectVersion}/${folderContent}`;
            const contentType = fileType(filePath);
            deletableKeyPaths.push({ Key: deleteKeyPath });
            // read file and upload to s3
            fs.readFile(filePath, (err, data) => {
              s3.putObject({
                Bucket: 'truvine',
                Key: keyPath,
                Body: data,
                ACL:'public-read',
                ContentType: contentType
              }, (err, file) => {
                // Log any errors
                if (err) { gutil.log('Error Uploading File to s3', err); }
                // If everything went successfully, print which file is being uploaded
                else {
                  gutil.log('Uploading asset ' + file);
                  // if end of new file uploading, delete old version of objects in S3
                  if (currentProjectVersion > 1 && folderContents[outerMostIndex + 1] === undefined) {
                    s3deleteObjects(s3, deletableKeyPaths);
                  }
                }
              });
            });
          }
        });
      });
    }
  });
}

const s3deleteObjects = (s3Connection, deletableObjects) => {
  s3Connection.deleteObjects({
    Bucket: 'truvine',
    Delete: {
      Objects: deletableObjects,
      Quiet: true || false
    }
  }, (err, data) => {
    if (err) console.log('Error deleting objects', err.stack);
    else console.log(data);
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
    case '.css':
      return 'text/css';
    case '.woff':
      return 'font/woff';
    case '.woff2':
      return 'font/woff2';
  }
}

module.exports = {
  toS3
}
