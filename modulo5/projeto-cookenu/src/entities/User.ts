export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
   
    constructor(
    private id:string, 
    private name:string,
    private email:string, 
    private password:string,
    private role:string){

    } 

static toUserModel (data:any): User {
    return new User (data.id, data.name, data.email, data.password, data.role);
}
}