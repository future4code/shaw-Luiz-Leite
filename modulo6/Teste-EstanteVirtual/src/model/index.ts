import connection from "../connection"
import { recepiTableName, userTableName } from "../types/types";




    connection.raw(`
    CREATE TABLE IF NOT EXISTS ${userTableName}
    (
    id VARCHAR(255) PRIMARY KEY,
    atleta VARCHAR (255) NOT NULL,
    competicao VARCHAR (255) NOT NULL UNIQUE,
    value VARCHAR (255) NOT NULL,
    unidade VARCHAR (255) NOT NULL
    );
   
    CREATE TABLE ${recepiTableName}
    (
    id VARCHAR(255) PRIMARY KEY,
    description VARCHAR (2555) NOT NULL UNIQUE,
    typecompeticao VARCHAR (255) NOT NULL UNIQUE,
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