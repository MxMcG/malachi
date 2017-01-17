

export const loginAdminUser = (username, hash, callback) => {
  return new Promise((resolve, reject) => {
    // look into DB and see if hash and username exists at given property
    console.log(username)
    console.log(hash)
  })
};
