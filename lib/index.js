'use strict';

var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var through = require('through2');
var assign = require('object-assign');
var githubStylePage = require('github-style-page');

var PLUGIN_NAME = 'gulp-github-style-page';

function gulpGithubStylePage(options) {

  var opt = assign({
    vars: {}
  }, options, {
    isContent: true,
    fileName: null
  });

  function transform(file, enc, cb) {
    var self = this;

    if (file.isNull()) {
      self.push(file);
      cb();
    }

    if (file.isStream()) {
      self.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return cb();
    }

    var content = file.contents.toString(enc);

    githubStylePage(content, null, opt, function(html) {
      file.contents = new Buffer(html);
      self.push(file);
      cb();
    });
  }

  return through.obj(transform);
}

module.exports = gulpGithubStylePage;