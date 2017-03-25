const Promise = require('bluebird');
const request = require('request').defaults({ json: true });

module.exports = (config) => {
  if (!config) {
    return Promise.reject(new Error('config required'));
  }

  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      uri: `https://oauth.reddit.com/user/${config.username}/comments`,
      headers: {
        Authorization: `bearer ${config.access_token}`,
        'User-Agent': config.user_agent,
      },
    };
    request(options, (error, _, body) => {
      if (error) {
        reject(error);
      } else if (!body || !body.data || !body.data.children) {
        reject(new Error('no comments found'));
      } else {
        resolve(body.data.children.map(c => `${c.kind}_${c.data.id}`));
      }
    });
  });
};

