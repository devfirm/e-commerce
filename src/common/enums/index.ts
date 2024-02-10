import { registerEnumType } from "@nestjs/graphql";

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHERS = 'others'
}
export enum VerificationStatusEnum {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}


export enum SortOrder {
  ASC =  1,
  DESC= -1
}

registerEnumType(SortOrder, {
name: 'SortOrder',
});

export enum LogicalOperator {
  AND ="AND",
  OR="OR",
  NOT="NOT"
}

registerEnumType(LogicalOperator, {
  name: 'LogicalOperator',
});