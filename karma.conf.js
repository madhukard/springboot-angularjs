module.exports = function(config){
  config.set({

    basePath : './src/',

    files : [
      'main/webapp/bower_components/angular/angular.js',
      'main/webapp/bower_components/angular-route/angular-route.js',
      'main/webapp/bower_components/angular-mocks/angular-mocks.js',
      'main/webapp/modules/home/home.js',
      'main/webapp/modules/home/HomeController.js',
      'main/webapp/modules/about/about.js',
      'main/webapp/modules/about/AboutController.js',
      'main/webapp/modules/contact/Contact.js',
      'main/webapp/modules/contact/ContactController.js',
      'main/webapp/app.js',
      'test/spec/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
