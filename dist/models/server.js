"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usersRoutes_1 = __importDefault(require("../routes/usersRoutes"));
var cors_1 = __importDefault(require("cors"));
//import * as userRoutes from "../routes/usersRoutes";
//exporta todo el paquete y sera almacenado con ese nombre
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            usuarios: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //definimos las rutas
        this.routes();
        this.middlewares();
    }
    Server.prototype.middlewares = function () {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.usuarios, usersRoutes_1.default);
    };
    Server.prototype.listen = function () {
        this.app.listen(this.port, function () {
            console.log('Corriendo en el puerto 8000');
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map