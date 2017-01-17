import bcrypt from 'bcryptjs';

export const changeLoginForm = (form) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    payload: form
  }
}

export const submitLoginForm = (data) => {
  const request = require('superagent');  
  return (dispatch) => {
    const saltUsername = salt(data.username);
    bcrypt.hash(data.password, saltUsername, (err, hash) => {
      // Something wrong while hashing
      if (err) {
        // requestFailed({
        //   type: 'failed'
        // });
        return;
      }
      request.post('/admin/login')
        .send({ username: data.username, hash  })
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err) { return console.log('add error message here')}
        // Calling the end function will send the request
          console.log('Publish was a success!', res)
        });


      // });
      // Use auth.js to fake a request
      // auth.login(username, hash, (success, err) => {
      //   // When the request is finished, hide the loading indicator
      //   dispatch(sendingRequest(false));
      //   dispatch(setAuthState(success));
      //   if (success === true) {
      //     // If the login worked, forward the user to the dashboard and clear the form
      //     forwardTo('/dashboard');
      //     dispatch(changeForm({
      //       username: "",
      //       password: ""
      //     }));
      //   } else {
      //     requestFailed(err);
      //   }
      // });
    });
  }
}

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
  const salt = btoa(String.fromCharCode.apply(String, bytes.slice(0, 16)));

  // Adding header for bcrypt. Fake 10 rounds
  return '$2a$10$' + salt;
};
