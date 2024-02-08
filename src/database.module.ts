import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/model/User';



@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // MongooseModule.forFeature([{ name: Attendance.name, schema: AttendanceSchema }]),
    // MongooseModule.forFeature([{ name: UserRoleTeam.name, schema: UserRoleTeamSchema }]),
    // MongooseModule.forFeature([{ name: JobPortal.name, schema: JobPortalSchema }]),
    // MongooseModule.forFeature([{ name: Applicant.name, schema: ApplicantSchema }]),

    
  ],
  exports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // MongooseModule.forFeature([{ name: Attendance.name, schema: AttendanceSchema }]),
  ]
})
export class DatabaseModule {}