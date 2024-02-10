import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
// import { GenderEnum } from 'src/common/enums';

export type UserDocument = User 

enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHERS = 'others'
}

@Schema({
  timestamps: true,
})
export class User extends Document {

  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phoneNo: string;

  @Prop()
  password: string;

  @Prop()
  permissions: string[];


  @Prop({ default: true })
  userStatus: boolean;

  @Prop()
  profilePic: string;

  @Prop({ required: false })
  refreshToken?: string;

  @Prop({ required: false })
  resetCode?: string;

  // @Prop({
  //   required: false,
  //   enum: [VerificationStatusEnum.VERIFIED, VerificationStatusEnum.UNVERIFIED],
  //   default: VerificationStatusEnum.UNVERIFIED,
  // })
  // verificationStatus?: string;

  // @Prop({ required: false, default: generateOTP() })
  // verificationCode?: number;

  @Prop({ enum: [GenderEnum.MALE, GenderEnum.FEMALE, GenderEnum.OTHERS] })
  gender: string;

  @Prop({
    type: {
      countryCode: { type: String },
      name: { type: String },
    },
  })
  country: {
    countryCode: string;
    name: string;
  };

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop({default : 'customer',enum: ['customer', 'admin', 'manager']})
  userType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
