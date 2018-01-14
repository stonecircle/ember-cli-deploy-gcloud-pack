/* eslint-env node */
module.exports = {
  description: 'Generate config for ember-cli-deploy gcloud pack',
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  }
};
