import { Role } from "../enum/role.enum"

export interface Blog{
    title:string
    document:Document
    description:string
    created_at:string
    updated_at:string
    created_byt:Role
    updated_by:Role
}

export interface Document{
    title:string;
    file:string
}