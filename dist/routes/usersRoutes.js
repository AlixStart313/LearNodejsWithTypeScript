"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//import { getUser, getUsers, postUser, putUser,deleteUser,enableOPrDisableUser } from '../controllers/usersController';
var psUsersControllers_1 = require("../controllers/psUsersControllers");
var router = (0, express_1.Router)();
router.get('/', psUsersControllers_1.getUsers);
router.get('/:id', psUsersControllers_1.getUser);
router.post('/', psUsersControllers_1.postUser);
router.put('/:id', psUsersControllers_1.putUser);
router.delete('/:id', psUsersControllers_1.deleteUser);
router.patch('/:id', psUsersControllers_1.enableOPrDisableUser);
exports.default = router;
//# sourceMappingURL=usersRoutes.js.map