import * as express from "express";
import { Express } from "express";
import * as cors from "cors";
import { AddressInfo } from "net";
import * as knex  from "knex";
import * as dotenv from "dotenv";
import { Request, Response } from "express"



dotenv.config();

export const connection = knex.knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express()

app.use(express.json());
app.use(cors());



// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


//a) Explique como é a resposta que temos quando usamos o raw. 


//b) Faça uma função que busque um ator pelo nome;
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  //c) Faça uma função que receba um gender retorne a quantidade de itens
  // na tabela Actor com esse gender. Para atrizes, female e para atores male. 
  
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };



   //Exercício 2
    
    //Agora vamos treinar um pouco os *query builders*. 
    //Eles são uma forma mais simples de fazer requisições que já tratam 
    //as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). 
    //Abaixo, há uma query que cria um ator:


//a) *Uma função que receba um salário e um id e realiza a atualização 
//do salário do ator em questão*

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

//b) *Uma função que receba um id e delete um ator da tabela*

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

//c) *Uma função que receba um `gender` e devolva a média dos salários 
//de atrizes ou atores desse `gender`*

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  // Exercício 3
    
    //Está na hora de começar a criar alguns endpoints. O mais simples de todos 
    //talvez seja o de pegar o ator pelo `id`.  Queremos criar um método GET que 
    //receba como *path param* o *id* do ator cujas informações queremos pegar. 
    //Para isso, devemos:
    
    //- Usar a função `get` do express
    //- Definir o *path param* com a **chave id: `/actor/:id`.** 
    //Dessa forma, poderemos acessar o endpoint 
    //assim: `http://localhost:3000/user/id-do-usuario`
   
   
    app.get("/actor/:id", async (req: Request, res: Response) => {
        try {
          const id = req.params.id;
          const actor = await getActorById(id);
      
          res.status(200).send(actor)
        } catch (err) {
          res.status(400).send({
            message: err.message,
          });
        }
      });

//a) Crie um endpoint com as especificações acima




//b) Crie um endpoint agora com as seguintes especificações:





//- Deve ser um GET (`/actor`)
//- Receber o gênero como um *query param* (`/actor?gender=`)
//- Devolver a quantidade de atores/atrizes desse gênero


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
