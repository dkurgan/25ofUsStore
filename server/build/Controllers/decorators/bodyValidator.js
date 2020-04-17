"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Enums_1 = require("./Enums");
function bodyValidate() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(Enums_1.MetaDataKeys.Validate, keys, target, key);
    };
}
exports.bodyValidate = bodyValidate;
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) { //iterate over the values of obj/arr
            var key = keys_1[_i];
            console.log(req.body);
            if (!req.body[key]) {
                res.status(422).send("Missing property " + key);
                return;
            }
        }
        next();
    };
}
exports.bodyValidator = bodyValidator;
