"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = require("../utils/connection");
var conn = new connection_1.connection();
var User = conn.connectionDB().define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    estatus: {
        type: sequelize_1.DataTypes.BOOLEAN
        //aunque lo tenemos como tynint en la bs, podemos usarlo como boolean aqui
        // y el sequelize se encargara de trasnformarlo
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map