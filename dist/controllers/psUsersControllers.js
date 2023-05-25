"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableOPrDisableUser = exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
var postgreSQLConection_1 = __importDefault(require("../utils/postgreSQLConection"));
var pool = new postgreSQLConection_1.default();
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pool.poolconection().query('SELECT * FROM users')];
            case 1:
                users = _a.sent();
                res.json(users.rows);
                return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, pool.poolconection().query('SELECT * FROM users WHERE id=$1', [id])];
            case 1:
                user = _a.sent();
                if (user) {
                    res.json(user.rows);
                }
                else {
                    res.status(404).json({
                        msg: "user with id ".concat(id, " doesn't exists")
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var postUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, newUser, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email;
                console.log(name, ' ', email);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pool.poolconection().query('INSERT INTO USERS(name,email,estatus) VALUES($1,$2,true)', [name, email])];
            case 2:
                newUser = _b.sent();
                res.status(200).json({
                    msg: 'User registered succesfuly'
                });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                console.error(e_1);
                res.status(500).json({
                    msg: 'An error has occurred and the user could not be registered'
                });
                throw Error(String(e_1));
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postUser = postUser;
var putUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, email, User, user, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, name = _a.name, email = _a.email;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, pool.poolconection().query('SELECT * FROM users WHERE id=$1', [id])];
            case 2:
                User = _b.sent();
                if (!!User) return [3 /*break*/, 3];
                res.status(404).json({
                    msg: "user with id ".concat(id, " doesn't exists")
                });
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, pool.poolconection().query('Update users set name = $1 , email = $2 where id=$3', [name, email, id])];
            case 4:
                user = _b.sent();
                res.status(200).json({
                    msg: 'User updatede succesfuly'
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                console.log(error_1);
                res.status(500).json({
                    msg: "An error has occurred"
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.putUser = putUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, User, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, pool.poolconection().query('SELECT * FROM users WHERE id=$1', [id])];
            case 2:
                User = _a.sent();
                if (!!User) return [3 /*break*/, 3];
                res.status(404).json({
                    msg: "user with id ".concat(id, " doesn't exists")
                });
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, pool.poolconection().query('delete from users where id = $1', [id])];
            case 4:
                user = _a.sent();
                res.status(200).json({
                    msg: "user deleted successfully"
                });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).json({
                    msg: "An error has occurred"
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
var enableOPrDisableUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, User, estatus, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, pool.poolconection().query('SELECT * FROM users WHERE id=$1', [id])];
            case 2:
                User = _a.sent();
                if (!!User) return [3 /*break*/, 3];
                res.status(404).json({
                    msg: "user with id ".concat(id, " doesn't exists")
                });
                return [3 /*break*/, 5];
            case 3:
                estatus = User.rows[0].estatus;
                console.log('103 ->', estatus);
                return [4 /*yield*/, pool.poolconection().query('Update users set estatus = $1 where id=$2', [estatus, id])];
            case 4:
                user = _a.sent();
                res.json(user);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).json({
                    msg: "An error has occurred"
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.enableOPrDisableUser = enableOPrDisableUser;
//# sourceMappingURL=psUsersControllers.js.map