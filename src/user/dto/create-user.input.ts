import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field((type)=> Int)
  lastName: number;

  @Field()
  email: string;  
}
