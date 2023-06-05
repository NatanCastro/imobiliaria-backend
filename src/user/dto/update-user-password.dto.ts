import { IsString, IsStrongPassword } from 'class-validator'

export class UpdateUserPasswordDto {
  @IsString()
  password: string
  @IsStrongPassword({ minLength: 8 })
  @IsString()
  newPassword: string
  @IsStrongPassword({ minLength: 8 })
  @IsString()
  confirmNewPassword: string
}
