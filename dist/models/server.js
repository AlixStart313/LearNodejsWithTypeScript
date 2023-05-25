"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var usersRoutes_1 = __importDefault(require("../routes/usersRoutes"));
var connection_1 = __importDefault(require("./../utils/connection"));
var postgreSQLConection_1 = __importDefault(require("./../utils/postgreSQLConection"));
//exporta todo el paquete y sera almacenado con ese nombre
var connection = new connection_1.default();
var pool = new postgreSQLConection_1.default();
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            usuarios: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        //definimos las rutas
        //this.DBConnection();
        this.PSConnection();
        this.routes();
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
            console.log('Corriendo en el puerto', process.env.PORT);
        });
    };
    Server.prototype.PSConnection = function () {
        var psDB = pool.Authentication();
        console.log(psDB);
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map