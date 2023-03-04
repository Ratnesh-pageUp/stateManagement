import { Role } from "../enum/role.enum";

export interface User{
    id:number;
    name:string;
    email:string;
    age:number;
    contact:number;
    address:string;
    role:Role;
}

