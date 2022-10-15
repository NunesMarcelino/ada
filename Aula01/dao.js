require(`dotenv`).config({path: "../.env"})

const mysql = require ('promise-mysql2')

const pool = mysql.createPool(
    {
        host: process.env.DB_URL,
        user: process.env.USUARIO_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.SCHEMA,
        port: process.env.PORT_DB,
        waitForConnection: true,
        connectionLimit: 10,
        queueLimit: 0
    }
 )

 console.log()

