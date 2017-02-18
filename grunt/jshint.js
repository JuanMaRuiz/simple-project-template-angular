module.exports = {
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
};
