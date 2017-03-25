const config = require('./config.json');
const getBearerToken = require('./get-bearer-token');
const getComments = require('./get-comments');
const overwriteComment = require('./overwrite-comment');
const deleteComment = require('./delete-comment');

config.user_agent = `${config.platform}:${config.id}:1.0.0`;

function purgeComment(id) {
  console.log(`Purging ${id}`);
  return overwriteComment(config, id)
    .then(() => deleteComment(config, id));
}

function processComments() {
  return getComments(config)
    .then(comments => Promise.all(comments.map(c => purgeComment(c))))
    .then(() => processComments());
}

getBearerToken(config)
  .then((grant) => {
    config.access_token = grant.access_token;
    return processComments();
  })
  .catch(console.error);

