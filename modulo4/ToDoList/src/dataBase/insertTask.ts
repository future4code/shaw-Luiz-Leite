import connection from "../index";


export default async function insertTask(
    id: string,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string

) {
    await connection('TodoListUser')
        .insert({

            id,
            title,
            description,
            limitDate,
            creatorUserId

        })

}




