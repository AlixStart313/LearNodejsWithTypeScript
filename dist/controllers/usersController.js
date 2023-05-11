"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUser = exports.getUsers = void 0;
var getUsers = function (req, res) {
    res.json({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
var getUser = function (req, res) {
    var id = req.params.id;
    res.json({
        msg: 'getUser ->' + id
    });
};
exports.getUser = getUser;
//# sourceMappingURL=usersController.js.map