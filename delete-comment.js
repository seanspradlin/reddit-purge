const Promise = require('bluebird');
const request = require('request').defaults({ json: true });

module.exports = (config, id) => {
  if (!config) {
    return Promise.reject(new Error('config required'));
  }

  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      uri: 'https://oauth.reddit.com/api/del',
      headers: {
        Authorization: `bearer ${config.access_token}`,
        'User-Agent': config.user_agent,
      },
      form: {
        id,
      },
    };
    request(options, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

