export interface CreateUserInput {
    exampleField: number;
}
export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
}
export interface User {
    exampleField: number;
}
export interface IQuery {
    user(id: number): User | Promise<User>;
}
export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
}
type Nullable<T> = T | null;
export {};
