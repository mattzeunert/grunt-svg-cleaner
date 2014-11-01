'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.svg_cleaner = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(5);

    var paths = [
      'default_options',
      'folder/file-1.svg',
      'folder/file-2.svg',
      'folder-2/file-1.svg',
      'folder-2/file-2.svg'
    ];

    var actual, expected, path;

    for (var i=0; i<paths.length; i++){
      path = paths[i];
      actual = grunt.file.read('tmp/' + path);
      expected = grunt.file.read('test/expected/' + path);
      test.equal(actual, expected, '');
    }

    test.done();
  },
};
