"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MYSQL {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'contoso',
            password: 'contoso',
            database: 'node_db',
            // insecureAuth: true
        });
        this.conectarDB();
    }
    conectarDB() {
        this.cnn.connect((error) => {
            if (error)
                return console.log(error);
            this.conectado = true;
            console.log('base de datos online');
        });
    }
}
exports.default = MYSQL;
