module.exports = {
  options: {
    processors: [
      require('pixrem')(), // add fallbacks for rem units
      require('autoprefixer')({browsers: 'last 5 versions'}), // add vendor prefixes
      require('cssnano')() // minify the result
    ]
  },
  dist: {
    src: 'public/css/*.css'
  }
};
