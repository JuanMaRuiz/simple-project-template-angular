module.exports = function(grunt, options) {
  return {
    options: {
        reporter: require('jshint-stylish'),
        jshintrc : '.jshintrc'
    },
    all: {
      src: [
        'Gruntfile.js',
        'app/js/{,*/}*.js'
      ]
    }
  }
};
