import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StringOperators {
  @Field({ nullable: true })
  en: string;

  @Field({ nullable: true })
  ne: string;

  @Field({ nullable: true })
  contains: string;

  @Field({ nullable: true })
  notContains: string;

  @Field(() => [String], { nullable: true })
  in: string[];

  @Field(() => [String], { nullable: true })
  notIn: string[];

  @Field({ nullable: true })
  regex: string;

  @Field({ nullable: true })
  isNull: boolean;
}
