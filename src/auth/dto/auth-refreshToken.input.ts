import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RefreshToken {
    @Field()
    rt: string;
}