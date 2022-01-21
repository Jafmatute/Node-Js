import router from "./router/router";
import Server from "./server/server";
import MYSQL from './mysql/mysql';

const port = 3000;
const server = Server.init(port);

server.app.use(router);

const mysql = new MYSQL();

server.start(() => {
    console.log(`Example app listening at http://localhost:${port}`);
})