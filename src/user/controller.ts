import { controller, httpGet as GET, httpPost as POST } from "inversify-express-utils";
import { UserService } from "./services";
import { inject } from "inversify";
import type { Request, Response } from "express";

import { JWT } from "../jwt";



@controller('/user')
export class User {

    constructor(@inject(UserService) private readonly UserService: UserService) {

    }
    @GET('/index',JWT.middleware())
    public async getIndex(req: Request, res: Response) {
        console.log(req.user.id)
        const result =await this.UserService.getList()
        res.send(result)
    }
    @POST('/create')
    public async createUser(req: Request, res: Response) {
        const result = await this.UserService.createUser(req.body)
        res.send(result)
    }
}