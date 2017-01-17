import bcrypt from 'bcryptjs';
import gutil from 'gutil';
const mongoose = require('mongoose');

import { userSchema } from './schemas.js'

export const loginAdminUser = (username, hash, callback) => {
  return new Promise((resolve, reject) => {
    // look into DB and see if hash and username exists at given property
    const AdminUser = mongoose.model('AdminUser', userSchema);
    AdminUser.where({ username: username }).findOne((err, doc) => {
      if (err) {
        gutil.log('MONGO SAVE ERROR', err)
        reject(err);
      };
      if (!doc) {
        gutil.log(`No user found for this username: ${username}`)
      }
      const hashDb = doc.toObject().hash;
      console.log('hash', hash)
      console.log('hashD', hashDb)
      console.log(bcrypt.compareSync(hash, hashDb))
    });
  })
};

export const createAdminUser = (username, password, projectAbv) => {
  return new Promise((resolve, reject) => {
    // add user to collection

    const genSalt = salt(username);
    bcrypt.hash(password, genSalt, (err, hash) => {

      const newUser = {
        username,
        hash,
        projectAbv
      }
      const AdminUser = mongoose.model('AdminUser', userSchema);
      AdminUser.create(newUser, (err, user) => {
        if (err) {
          gutil.log('MONGO SAVE ERROR', err)
          reject(err);
        };
        resolve({ username, projectAbv });
      });
    });


  });
};

/**
 * Generate 16 bytes salt for bcrypt by seed
 *
 * Should return the same salt for the same seed
 *
 * @param  {string}   seed The seed for salt
 * @return {string}        The resulted salt
 */
const salt = (seed) => {
  // Salt must be 16 bytes
  const bytes = [];
  for (let i = 0, l = seed.length; i < l; i++) {
    bytes.push(seed.charCodeAt(i));
  }
  while (bytes.length < 16) {
    bytes.push(0);
  }
  // Convert byte array to base64 string
  // const salt = btoa(String.fromCharCode.apply(String, bytes.slice(0, 16)));

  const salt = new Buffer(String.fromCharCode.apply(String, bytes.slice(0, 16))).toString('base64');
  console.log('salt', salt)

  // Adding header for bcrypt. Fake 10 rounds
  return '$2a$10$' + salt;
};
