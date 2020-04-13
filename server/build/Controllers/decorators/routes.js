"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Enums_1 = require("./Enums");
function routesBuilder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(Enums_1.MetaDataKeys.Method, method, target, key);
            Reflect.defineMetadata(Enums_1.MetaDataKeys.Path, path, target, key);
        };
    };
}
exports.routesBuilder = routesBuilder;
exports.get = routesBuilder(Enums_1.Methods.Get);
exports.post = routesBuilder(Enums_1.Methods.Post);
