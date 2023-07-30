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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMongoUserService = exports.deleteMongoUserService = exports.postMongoUserService = exports.getMongoUserService = exports.getMongoUsersService = void 0;
const users_1 = require("../models/users");
const getMongoUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.userModel.find({}).sort({ createdAt: -1 });
    return users;
});
exports.getMongoUsersService = getMongoUsersService;
const getMongoUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.userModel.findById(id);
    return user;
});
exports.getMongoUserService = getMongoUserService;
const postMongoUserService = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const addUser = yield users_1.userModel.create(newUser);
    return addUser;
});
exports.postMongoUserService = postMongoUserService;
const deleteMongoUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield users_1.userModel.findOneAndDelete({ _id: id });
    return deleteUser;
});
exports.deleteMongoUserService = deleteMongoUserService;
const updateMongoUserService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateUser = yield users_1.userModel.findOneAndUpdate({ _id: id }, Object.assign({}, update));
    return updateUser;
});
exports.updateMongoUserService = updateMongoUserService;
