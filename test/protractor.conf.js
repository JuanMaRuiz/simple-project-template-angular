exports.config = {
  framework: 'jasmine2',
  onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*-Spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true
  }
}
