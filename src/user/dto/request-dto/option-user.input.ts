import { InputType, Field, Int, Float, registerEnumType } from '@nestjs/graphql';
import { DateOperators } from 'src/common/common-dtos/date-operators.dto';
import { LogicalOperator, SortOrder } from 'src/common/enums';


@InputType()
class UserSortParameter{
  @Field(()=>SortOrder,{ nullable: true })
  firstName: SortOrder;

  @Field(()=>SortOrder,{ nullable: true })
  lastName: SortOrder;

  @Field(()=>SortOrder,{ nullable: true })
  email: SortOrder;

  @Field(()=>SortOrder,{ nullable: true })
  country?: SortOrder;

  @Field(()=>SortOrder,{ nullable: true })
  state?: SortOrder;

  @Field(()=>SortOrder,{ nullable: true })
  city?: SortOrder;


  @Field(()=>SortOrder,{ nullable: true })
  userType?: SortOrder;



  @Field(()=>SortOrder,{ nullable: true })
  createAt: SortOrder

  @Field(()=>SortOrder,{ nullable: true })
  updatedAt: SortOrder
} 

@InputType()
class UserFilterParam {
  @Field({ nullable: true })
  firstName: String;

  @Field({ nullable: true })
  lastName: String;

  @Field({ nullable: true })
  email: String;

  @Field({ nullable: true })
  phoneNo?: String;

  @Field({ nullable: true })
  userStatus: boolean;

//   @Field(() => Country, { nullable: true })
//   country?: Country;

  @Field({ nullable: true })
  state?: String;

  @Field({ nullable: true })
  city?: String;

  @Field({ nullable: true })
  address?: String;

  @Field({ nullable: true })
  occupation?: String;

  @Field(() => Float, { nullable: true })
  yearsOfExperience?: number;

  @Field({ nullable: true })
  specialization?: String;

  @Field({ nullable: true })
  userType?: String;

  @Field({ nullable: true })
  createAt: String;
}


@InputType()
export class UserListOption {
  @Field(()=>Int)
  page: number;

  @Field((type)=> Int)
  limit: number;

  @Field(()=> UserSortParameter,{ nullable: true })
  sort?: UserSortParameter;  

  @Field(()=> UserFilterParam,{ nullable: true })
  filter?: UserFilterParam;  

  @Field(()=>LogicalOperator, { nullable: true })
  filterOperator: LogicalOperator;  
}

