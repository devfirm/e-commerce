export class UserDto {
  id: string;
  email: string;
  profilePic: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phoneNo?: string;
  dob?: string;
  country?: {
    countryCode: string,
    name: string,
  };
  city?: string;
  address?: string;
  state?: string;
  verificationStatus?: string;
  verificationCode?: number;
  refreshToken?: string | null;
  accessToken?: string;
  occupation?: string;
  settingId: string; 
  yearsOfExperience?: number;
  specialization?: string;

}
