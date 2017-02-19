module.exports = {
  project: {
    files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json','public/**/*.css', './scss/*.scss'],
    tasks: ["sass"],
    options: {
      livereload: true
    },

  }
}
