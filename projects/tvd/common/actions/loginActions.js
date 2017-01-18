import bcrypt from 'bcryptjs';
import { browserHistory } from 'react-router';

// PURE ACTIONS

export const changeLoginForm = (form) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    payload: form
  }
}

export const setAuthState = (payload) => {
  return {
    type: 'SET_AUTH_STATE',
    payload
  }
}

export const updateAdminContent = (payload) => {
  return {
    type: 'UPDATE_ADMIN_CONTENT',
    payload
  }
}

// ACTION CREATORS

export const logout = () => {
  return (dispatch) => {
    dispatch(
      setAuthState({
        username: null,
        password: null,
        loggedIn: false,
        attempt: ''
      })
    );
    forwardTo('/')
  }
}

const updateContent = (dispatch, projectAbv) => {
  return new Promise((resolve, reject) => {
    const request = require('superagent');
    request.post('/api/cms/fetchContent')
    .send({ projectAbv })
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        return reject('Error hitting update content endpoint');
      }
      // take this content and dispatch change to content state... simple
      const content = JSON.parse(res.text);
      dispatch(updateCdnUrl(projectAbv));
      
      return resolve(dispatch(updateAdminContent(content)));
    });
  });

};

export const submitLoginForm = (data) => {
  const request = require('superagent');
  return (dispatch) => {
    const saltUsername = salt(data.username);
      request.post('/admin/login')
        .send({ username: data.username, hash: data.password  })
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err) {
            requestFailed('Please enter a valid username and password.');
            return console.log('Error with login endpoint')
          }
        // Calling the end function will send the request
        const response = JSON.parse(res.text);
          const validUser = response.validUser;
          const projectAbv = response.projectAbv;
          if (validUser === true) {
            // dispatch invalid user action
            dispatch(
              setAuthState({
                loggedIn: true,
                attempt: 'success'
              })
            );
            // dispatch action that updates content state with config for project
            updateContent(dispatch, projectAbv).then(
              (success) => { forwardTo('/admin'); },
              (fail) => { console.log('fail')}
            )
          } else {
            // dispatch valid user action
            dispatch(
              setAuthState({
                loggedIn: false,
                attempt: 'failure'
              })
            );
            requestFailed('Please enter a valid username and password.');
          }
          // clear form
          dispatch(
            changeLoginForm({
              username: '',
              password: ''
            })
          );
        });
  }
}

// HELPERS

const forwardTo = (location) => {
  console.log('forwardTo(' + location + ')');
  browserHistory.push(location);
}

const requestFailed = (message) => {
  const errorDiv = window.document.getElementsByClassName('form-error')[0];
  errorDiv.innerHTML = '';
  errorDiv.classList.add('active');
  errorDiv.innerHTML = message;
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
