"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolConnection = void 0;
var pg_1 = require("pg");
var PoolConnection = /** @class */ (function () {
    function PoolConnection() {
        this.dbUser = process.env.PSUSER || 'postgres';
        this.dbHost = process.env.PSHOST || 'localhost';
        this.dbPassWord = process.env.PSPASSWORD || 'root';
        this.dbName = process.env.PSDBNAME || 'prueba';
        this.port = 5432;
        this.db = null;
    }
    PoolConnection.prototype.poolconection = function () {
        if (!this.db) {
            this.db = new pg_1.Pool({
                user: this.dbUser,
                host: this.dbHost,
                password: this.dbPassWord,
                database: this.dbName,
                port: this.port,
            });
        }
        return this.db;
    };
    PoolConnection.prototype.Authentication = function () {
        var message = 'Conexión exitosa a la base de datos';
        this.poolconection().connect(function (error, client, release) {
            if (error) {
                message = 'Error al conectar a la base de datos:', error;
                return;
            }
            message = 'Conexión exitosa a la base de datos';
            release();
        });
        return message;
    };
    return PoolConnection;
}());
exports.PoolConnection = PoolConnection;
exports.default = PoolConnection;
//# sourceMappingURL=postgreSQLConection.js.map