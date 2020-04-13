"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!this.instance) {
            this.instance = express_1.default.Router();
        }
        return this.instance;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
