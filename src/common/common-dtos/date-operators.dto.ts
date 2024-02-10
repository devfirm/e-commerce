import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DateOperators {
  @Field( { nullable: false })
  eq: Date;

  @Field( { nullable: false })
  before: Date;

  @Field( { nullable: false })
  after: Date;

  @Field({ nullable: false })
  between: Date;

  @Field({ nullable: false })
  isNull: boolean;
}
