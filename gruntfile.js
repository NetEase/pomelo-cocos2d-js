'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      standalone: {
        src: ['index.js'],
        dest: './dist/pomelo-cocos2d-js.js'
      }
    },
    uglify: {
      dist: {
        files: {
          './dist/pomelo-cocos2d-js.min.js': ['<%= browserify.standalone.dest %>'],
        }
      }
    },
  });

  // Default task.
  grunt.registerTask('default', ['browserify:standalone', 'uglify']);
};