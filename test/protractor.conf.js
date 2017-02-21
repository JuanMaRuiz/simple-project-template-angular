let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
  specs: ['specs/*-Spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true
  }
}
