/*
 * grunt-svg-cleaner
 * https://github.com/mattzeunert/grunt-svg-cleaner
 *
 * Copyright (c) 2014 Matt Zeunert
 * Licensed under the CC-0 license.
 */

'use strict';

var eachAsync = require('each-async');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('svg_cleaner', 'Grunt task to compress SVG files, based on svg-cleaner.', function() {
        var done = this.async();

        eachAsync(this.files, function (file, i, next) {
            var content = grunt.file.read(file.src[0]);

            grunt.file.write(file.dest, content);
            next();
        }, function () {
            done();
        });


    });

};
