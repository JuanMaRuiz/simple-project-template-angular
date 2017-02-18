module.exports = {
  options: {
    srcPrefix: 'bower_components'
  },
  scripts: {
    options: {
      destPrefix: 'public/js/lib'
    },
    files: {
      'angular.js' : 'angular/angular.js',
      'angular-ui-router.js' : 'angular-ui-router/release/angular-ui-router.js'
    }
  }
};
