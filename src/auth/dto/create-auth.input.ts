import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthInput {
  @Field()
  firstName: string;

  @Field({nullable:true})
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password: string;
}
