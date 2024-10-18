'use strict';

var bodyParser = require('body-parser');
var EventEmitter = require('events').EventEmitter;
var mixin = require('merge-descriptors');
var proto = require('express/lib/application');
var Route = require('express/lib/router/route');
var Router = require('express/lib/router');
var req = require('express/lib/request');
var res = require('express/lib/response');

exports = module.exports = createApplication;

/**
 * Create an express application.
 *
 * @return {Function}
 * @api public
 */
function createApplication() {
    var app = function (req, res, next) {
        app.handle(req, res, next);
    };

    mixin(app, EventEmitter.prototype, false);
    mixin(app, proto, false);

    app.init();
    return app;
}

exports.application = proto;
exports.request = req;
exports.response = res;

exports.Route = Route;
exports.Router = Router;

exports.json = bodyParser.json;
exports.query = require('express/lib/middleware/query');
exports.raw = bodyParser.raw;
exports.static = require('serve-static');
exports.text = bodyParser.text;
exports.urlencoded = bodyParser.urlencoded;

var removedMiddlewares = [
    'bodyParser',
    'compress',
    'cookieSession',
    'session',
    'logger',
    'cookieParser',
    'responseTime',
    'errorHandler',
    'timeout',
    'methodOverride',
    'vhost',
    'csrf',
    'directory',
    'limit',
    'multipart',
    'staticCache'
];

removedMiddlewares.forEach(function (name) {
    Object.defineProperty(exports, name, {
        get: function () {
            throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
        },
        configurable: true
    });
});
