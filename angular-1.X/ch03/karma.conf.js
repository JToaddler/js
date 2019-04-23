module.exports = function (config) {

    config.set({
        // base path that will be used to resolve files and exclude
        basePath: '',
        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular/angular-monpmcks.js',
            'controller.js',
            'controllerSpec.js'
        ],
        // list of files / patterns to exclude
        exclude: [],
        port: 8080,
        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR ||
        // LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests
        // whenever any file changes
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });

};