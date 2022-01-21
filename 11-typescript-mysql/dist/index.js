"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./router/router"));
const server_1 = __importDefault(require("./server/server"));
const mysql_1 = __importDefault(require("./mysql/mysql"));
const port = 3000;
const server = server_1.default.init(port);
server.app.use(router_1.default);
// const mysql = new MYSQL();
mysql_1.default.instance;
server.start(() => {
    console.log(`Example app listening at http://localhost:${port}`);
});
