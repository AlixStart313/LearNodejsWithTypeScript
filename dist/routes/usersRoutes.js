"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersController_1 = require("../controllers/usersController");
var usersController_2 = require("../controllers/usersController");
var router = (0, express_1.Router)();
router.get('/', usersController_1.getUsers);
router.get('/:id', usersController_1.getUser);
router.post('/', usersController_1.postUser);
router.put('/', usersController_1.putUser);
router.delete('/:id', usersController_2.deleteUser);
exports.default = router;
//# sourceMappingURL=usersRoutes.js.map