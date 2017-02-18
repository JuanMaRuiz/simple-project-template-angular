(function(){
  'use strict';

  module.exports = function (grunt) {

  require('jit-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt);

  grunt.registerTask('default', [
    'jshint',
    'wiredep',
    'bowercopy',
    'connect',
    'sass',
    'postcss',
    'watch'
    ]);

  };
})();
