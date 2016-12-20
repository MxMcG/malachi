const AWS  = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const gutil = require('gutil');

/**
 * Takes content of build folder and uploads them to AWS S3 bucket
 * makes distinction between file or folder and then places into bucket
 */
const toS3 = (project) => {
  const projectBuildPath = path.resolve(__dirname, '../build', project);
  const s3 = new AWS.S3();
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
          files.forEach((file, index) => {
            const fileInDirectory = path.join(projectBuildPath, folderContent, file);
            fs.readFile(fileInDirectory, (err, data) => {
              // take data, push to s3
              s3.putObject({
                Bucket: 'truvine',
                Key: `${project}/${folderContent}/${file}`,
                Body: data,
                ACL:'public-read'
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
        // read file and upload to s3
        fs.readFile(filePath, (err, data) => {
          s3.putObject({
            Bucket: 'truvine',
            Key: `${project}/${folderContent}`,
            Body: data,
            ACL:'public-read'
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

module.exports = {
  toS3
}
