import connection from "../connection";
import { recepiTableName, userTableName } from "../types";




    connection.raw(`
    CREATE TABLE IF NOT EXISTS ${userTableName}
    (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL
    );

    CREATE TABLE ${recepiTableName}
    (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (2555) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    authorId VARCHAR(255),
    FOREIGN KEY (authorId) REFERENCES ${userTableName} (id)
    );

    `).then (
        () => console.log ("MSQL tables sucesso")
    ).catch ( error =>
        console.log (error.message)

    ).finally(() =>{
        connection.destroy()
    }
    )
