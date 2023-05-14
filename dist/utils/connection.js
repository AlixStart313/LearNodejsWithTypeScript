"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var sequelize_1 = require("sequelize");
var connection = /** @class */ (function () {
    function connection() {
        this.dbName = process.env.BDNAME || 'node';
        this.dbUser = process.env.DBUSER || 'root';
        this.dbPassWord = process.env.DBPASSWORD || 'root';
        this.db = null;
    }
    connection.prototype.connectionDB = function () {
        if (!this.db) {
            this.db = new sequelize_1.Sequelize(this.dbName, this.dbUser, this.dbPassWord, {
                host: 'localhost',
                dialect: 'mysql',
                // para fines educativos lo hemos quitado por que deseamos ver los querys que se ejecutan
                // logging:false,
            });
        }
        return this.db;
    };
    return connection;
}());
exports.connection = connection;
exports.default = connection;
//# sourceMappingURL=connection.js.map