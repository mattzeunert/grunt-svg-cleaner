/*
 * grunt-svg-cleaner
 * https://github.com/mattzeunert/grunt-svg-cleaner
 *
 * Copyright (c) 2014 Matt Zeunert
 * Licensed under the CC-0 license.
 */

'use strict';

var eachAsync = require('each-async');
var svgCleaner = require('svg-cleaner');
var path = require('path');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('svg_cleaner', 'Grunt task to compress SVG files, based on svg-cleaner.', function() {
      console.log('---');
        this.files.forEach(function(file, i){
          var destFolder = file.dest;
          grunt.file.mkdir(destFolder);
          file.src.forEach(function(src){
              svgCleaner.cleanFile(src, destFolder + '/' + path.basename(src));
          });
          console.log(file.src[0]);

        });
        console.log('---');
    });

};
