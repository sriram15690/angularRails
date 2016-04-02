// Karma configuration
// Generated on Sat Apr 02 2016 22:32:25 GMT+0800 (SGT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai'],


    // list of files / patterns to load in the browser
    // Here, We are loading all the Angualar Core lib files and oher files which need to be loaded before loading the App.js
    files: [
      'http://code.jquery.com/jquery-1.11.3.js',
      './app/assets/javascripts/angular/angular.js',
      './app/assets/javascripts/angular/angular-route.js',
      './app/assets/javascripts/angular/angular-resource.js',
      './app/assets/javascripts/angular/angular-ui-router.min.js',
      './app/assets/javascripts/app.js',
      './app/assets/javascripts/angular/devise-min.js',
      './app/assets/javascripts/services/services.js',
      './app/assets/javascripts/directives/directives.js',
      'test-main.js',
      {pattern: './spec/javascripts/**/*spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
