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

    static ejecutarQuery(query: string, callback: Function) {
        this.instance.cnn.query(query, (err, results: object[], fields) => {
            if (err) {
                console.log('error en query');
                return callback(err);
            }

            if (results.length === 0) {
                callback('El registro solicitado no existe')
            } else {
                callback(null, results);
            }


        });
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