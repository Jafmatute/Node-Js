import mysql = require('mysql');

class MYSQL {
    private static _instance: MYSQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
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

    public static get instance() {

        return this._instance || (this._instance = new this());
    }

    private conectarDB() {
        this.cnn.connect((error: mysql.MysqlError) => {
            if (error) return console.log(error);

            this.conectado = true;
            console.log('base de datos online');

        });
    }

}


export default MYSQL;