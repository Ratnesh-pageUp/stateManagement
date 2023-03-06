import { Role } from "../enum/role.enum"

export interface Blog{
    id:number;
    title:string
    description:string
    // document:Document
    // created_at:string
    // updated_at:string
    // created_byt:Role
    // updated_by:Role
}

export interface Document{
    title:string;
    file:string
}