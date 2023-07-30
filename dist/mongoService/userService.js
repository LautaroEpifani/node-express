"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMongoUserService = exports.deleteMongoUserService = exports.postMongoUserService = exports.getMongoUserService = exports.getMongoUsersService = void 0;
const users_1 = require("../models/users");
const getMongoUsersService = async () => {
    const users = await users_1.userModel.find({}).sort({ createdAt: -1 });
    return users;
};
exports.getMongoUsersService = getMongoUsersService;
const getMongoUserService = async (id) => {
    const user = await users_1.userModel.findById(id);
    return user;
};
exports.getMongoUserService = getMongoUserService;
const postMongoUserService = async (newUser) => {
    const addUser = await users_1.userModel.create(newUser);
    return addUser;
};
exports.postMongoUserService = postMongoUserService;
const deleteMongoUserService = async (id) => {
    const deleteUser = await users_1.userModel.findOneAndDelete({ _id: id });
    return deleteUser;
};
exports.deleteMongoUserService = deleteMongoUserService;
const updateMongoUserService = async (id, update) => {
    const updateUser = await users_1.userModel.findOneAndUpdate({ _id: id }, {
        ...update
    });
    return updateUser;
};
exports.updateMongoUserService = updateMongoUserService;
