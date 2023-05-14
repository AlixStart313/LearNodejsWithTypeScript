"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersController_1 = require("../controllers/usersController");
var router = (0, express_1.Router)();
router.get('/', usersController_1.getUsers);
router.get('/:id', usersController_1.getUser);
router.post('/', usersController_1.postUser);
router.put('/:id', usersController_1.putUser);
router.delete('/:id', usersController_1.deleteUser);
router.patch('/:id', usersController_1.enableOPrDisableUser);
exports.default = router;
//# sourceMappingURL=usersRoutes.js.map