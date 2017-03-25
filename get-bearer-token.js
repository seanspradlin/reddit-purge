const Promise = require('bluebird');
const request = require('request').defaults({ json: true });

module.exports = (config) => {
  if (!config) {
    return Promise.reject(new Error('config required'));
  }

  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      uri: 'https://www.reddit.com/api/v1/access_token',
      form: {
        grant_type: 'password',
        username: config.username,
        password: config.password,
      },
      auth: {
        user: config.id,
        pass: config.secret,
      },
    };
    request(options, (error, _, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

