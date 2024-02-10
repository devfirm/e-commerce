import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto {
  @ApiProperty({ default: 200 })
  status: number;
  @ApiProperty()
  message: string;
}
