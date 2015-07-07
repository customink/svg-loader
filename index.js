var loaderUtils = require('loader-utils');
var fileLoader = require('file-loader');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);

  loader = fileLoader;
  if(query.inline) {
    var rawLoader = require('raw-loader');
    loader = rawLoader;
  }

  return loader.call(this, content);
}
