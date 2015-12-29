
var path = require('path');
var should = require('should');
var gutil = require('gulp-util');
var gulpGithubStylePage = require('../lib/index');

function createFakeFile(filename, contents) {
  return new gutil.File({
    cwd: process.cwd(),
    base: path.join(__dirname),
    path: path.join(__dirname, filename),
    contents: contents
  });
}

describe('gulp-github-style-page', function() {
  it('works', function(done) {
    var str = 'function test(){}';
    var fakeFile = createFakeFile('normal.js', new Buffer(str));
    gulpGithubStylePage().once('data', function(bundled) {
      should.exist(bundled.contents);
      done();
    }).end(fakeFile);
  });
});