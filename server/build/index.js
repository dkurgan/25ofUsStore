"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AppRouter_1 = require("./AppRouter");
require("./Controllers/DeliveryController");
var app = express_1.default();
//Fight with CORS Policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(AppRouter_1.AppRouter.getInstance());
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("That shit is flying on " + PORT);
});
