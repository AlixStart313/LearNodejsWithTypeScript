"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
    }
    Server.prototype.listen = function () {
        this.app.listen(this.port, function () {
            console.log('Corriendo en el puerto 8000.....');
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map