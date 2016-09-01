var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '38096770d7994efa875c3606f7db066e';
var sentryApp = '95598';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;
var _APP_INFO = {
    name: 'Github Battle',
    branch: '4',
    version: '1.0'
};

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch,
    }
}).install();

ReactDOM.render(routes, document.getElementById('app'));