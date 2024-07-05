"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverConfig_1 = __importDefault(require("./config/serverConfig"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(serverConfig_1.default.port, () => {
    console.log("server started" + serverConfig_1.default.port);
});
