module.exports = {
  task: {
    // Point to the files that should be updated when
    // you run `grunt wiredep`
    src: [
      'app/index.html'
    ],
    ignorePath:  /\.\.\//
  }
};
