import router from "./router/router";
import Server from "./server/server";
const port = 3000;
const server = Server.init(port);

server.app.use(router);

server.start(() => {
    console.log(`Example app listening at http://localhost:${port}`);
})