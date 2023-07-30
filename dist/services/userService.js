"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = exports.deleteUserService = exports.postUserService = exports.getUserService = exports.getUsersService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "users.json");
const readUsers = fs_1.default.readFileSync(directory, "utf8");
const usersJson = JSON.parse(readUsers);
const getUsersService = async () => {
    return readUsers;
};
exports.getUsersService = getUsersService;
const getUserService = async (id) => {
    const user = usersJson.find((user) => user.id.toString() === id);
    return JSON.stringify(user);
};
exports.getUserService = getUserService;
const postUserService = async (newUser) => {
    usersJson.push(newUser);
    fs_1.default.writeFileSync(directory, JSON.stringify(usersJson));
};
exports.postUserService = postUserService;
const deleteUserService = async (id) => {
    const newArray = usersJson.filter((user) => user.id.toString() !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.deleteUserService = deleteUserService;
const updateUserService = async (id, newUser) => {
    let newArray = [];
    let user = usersJson.find((user) => user.id.toString() === id);
    user = { ...user, ...newUser };
    if (user) {
        newArray = usersJson.filter((userFilt) => userFilt.id.toString() !== id);
        newArray.push(user);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.updateUserService = updateUserService;
