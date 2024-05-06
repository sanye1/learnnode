import { IsEmail, IsNotEmpty } from "class-validator";

import { Transform } from "class-transformer";
export class UserDto{
    @IsNotEmpty({message:'名称是必填的'})
    @Transform(({value})=>value.trim()) // 去除空格
    name: string;

    @IsNotEmpty({message:'邮箱是必填的'})
    @IsEmail({},{message:'请输入正确的邮箱格式'}) // 验证邮箱格式
    email: string;
}