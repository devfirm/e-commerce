
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}

export enum LogicalOperator {
    AND = "AND",
    OR = "OR",
    NOT = "NOT"
}

export interface UserListOption {
    page: number;
    limit: number;
    sort?: Nullable<UserSortParameter>;
    filter?: Nullable<UserFilterParam>;
    filterOperator?: Nullable<LogicalOperator>;
}

export interface UserSortParameter {
    firstName?: Nullable<SortOrder>;
    lastName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    country?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    city?: Nullable<SortOrder>;
    userType?: Nullable<SortOrder>;
    createAt?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export interface UserFilterParam {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phoneNo?: Nullable<string>;
    userStatus?: Nullable<boolean>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    address?: Nullable<string>;
    occupation?: Nullable<string>;
    yearsOfExperience?: Nullable<number>;
    specialization?: Nullable<string>;
    userType?: Nullable<string>;
    createAt?: Nullable<string>;
}

export interface CreateAuthInput {
    firstName: string;
    lastName?: Nullable<string>;
    email: string;
    password?: Nullable<string>;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface RefreshToken {
    rt: string;
}

export interface User {
    exampleField: number;
}

export interface AllUserResponse {
    totalUsers: number;
    users: User[];
}

export interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export interface IQuery {
    allUser(option: UserListOption): AllUserResponse | Promise<AllUserResponse>;
    userDetails(id: string): User | Promise<User>;
}

export interface IMutation {
    signUpUser(singUpInput: CreateAuthInput): string | Promise<string>;
    login(loginInput: LoginInput): LoginResponse | Promise<LoginResponse>;
    refreshUserTokens(refreshToken: RefreshToken): LoginResponse | Promise<LoginResponse>;
}

type Nullable<T> = T | null;
