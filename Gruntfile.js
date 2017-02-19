(function(){
  'use strict';

  module.exports = function (grunt) {
    const path = require('path');

    require('jit-grunt')(grunt);

    // load grunt config
    require('load-grunt-config')(grunt, {
      // path to task.js files, defaults to grunt dir
      configPath: path.join(process.cwd(), 'grunt/tasks'),
    });

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
