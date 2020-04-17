"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Enums_1 = require("./Enums");
var AppRouter_1 = require("../../AppRouter");
var bodyValidator_1 = require("./bodyValidator");
function controller(pathPrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) { // loop thru all prop in class
            var method = Reflect.getMetadata(Enums_1.MetaDataKeys.Method, target.prototype, key);
            var path = Reflect.getMetadata(Enums_1.MetaDataKeys.Path, target.prototype, key);
            var requiredBody = Reflect.getMetadata(Enums_1.MetaDataKeys.Validate, target.prototype, key);
            var validated = bodyValidator_1.bodyValidator(requiredBody);
            var routeHandler = target.prototype[key];
            if (path) {
                router[method]("" + pathPrefix + path, validated, routeHandler);
            }
        }
    };
}
exports.controller = controller;
