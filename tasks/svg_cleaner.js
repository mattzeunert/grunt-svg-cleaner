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
        this.files.forEach(function(file, i){
            grunt.file.mkdir(file.dest);

            svgCleaner.cleanFile(file.src[0], file.dest + '/' + path.basename(file.src[0]));
        });
    });

};
