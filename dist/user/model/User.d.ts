/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
export type UserDocument = User;
export declare class User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    password: string;
    permissions: string[];
    userStatus: boolean;
    profilePic: string;
    refreshToken?: string;
    resetCode?: string;
    gender: string;
    country: {
        countryCode: string;
        name: string;
    };
    state: string;
    city: string;
    address: string;
    designation: string;
    yearsOfExperience: number;
    specialization: string;
    userType: string;
    dateOfBirth?: string;
    attendance: {
        status: boolean;
        officeInTime: Date;
        officeOutTime: Date;
    };
    education: [
        {
            qualification: string;
            instituteName: string;
            passingYear: string;
        }
    ];
    skills: [string];
    nidNumber: number;
}
export declare const UserSchema: MongooseSchema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
}>;
