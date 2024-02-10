import { LogicalOperator, SortOrder } from 'src/common/enums';
declare class UserSortParameter {
    firstName: SortOrder;
    lastName: SortOrder;
    email: SortOrder;
    country?: SortOrder;
    state?: SortOrder;
    city?: SortOrder;
    userType?: SortOrder;
    createAt: SortOrder;
    updatedAt: SortOrder;
}
declare class UserFilterParam {
    firstName: String;
    lastName: String;
    email: String;
    phoneNo?: String;
    userStatus: boolean;
    state?: String;
    city?: String;
    address?: String;
    occupation?: String;
    yearsOfExperience?: number;
    specialization?: String;
    userType?: String;
    createAt: String;
}
export declare class UserListOption {
    page: number;
    limit: number;
    sort?: UserSortParameter;
    filter?: UserFilterParam;
    filterOperator: LogicalOperator;
}
export {};
