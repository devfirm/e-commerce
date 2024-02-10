import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class AllUserResponse {
    @Field(()=>Int)
    totalUsers:number;

    @Field(() => [User])
    users: [User]
}

