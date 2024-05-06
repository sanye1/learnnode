import 'reflect-metadata'
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import express from 'express';
import { User } from './src/user/controller'
import { UserService } from './src/user/services'
import { PrismaClient } from '@prisma/client';
   
import { JWT } from './src/jwt';
import {PrismaDB} from './src/db'
const container = new Container();

/**
 * User 模块
 */
container.bind(User).to(User);
container.bind(UserService).to(UserService);

/**
 * Prisma 模块
 */
container.bind<PrismaClient>('PrismaClient').toFactory(()=>{
    return ()=>{
       return new PrismaClient()
    }
})
container.bind(PrismaDB).to(PrismaDB)


/**
 * JWT 模块
 */
container.bind(JWT).to(JWT)

const server = new InversifyExpressServer(container);


server.setConfig((app) => {
    // ...
    app.use(express.json())
    app.use(container.get(JWT).init())
})
const app = server.build();

app.listen(3000, () => {
    // ... 
    console.log('listening on port 3000')
})

declare global{
    namespace Express{
        interface User {
            id:number
            name:string
            email:string
        }
        interface Request{
            user?:User
        }
    }
}