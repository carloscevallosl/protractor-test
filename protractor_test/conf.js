// Configuration file of protractor tests
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called
    specs: ['../protractor_test/login_spec.js'],
  
    // Options to be passed to Jazmine
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };
  