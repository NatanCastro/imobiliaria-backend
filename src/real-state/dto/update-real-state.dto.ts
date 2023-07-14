import { PartialType } from '@nestjs/mapped-types'
import { CreateRealStateDto } from './create-real-state.dto'
import { IsBoolean, IsNumber, IsOptional, IsString, Min } from 'class-validator'

export class UpdateRealStateDto extends PartialType(CreateRealStateDto) {
  @IsOptional()
  @IsString()
  name?: string
  @IsOptional()
  @IsString()
  description: string
  @IsOptional()
  @IsString()
  number?: string
  @IsOptional()
  @IsString()
  street?: string
  @IsOptional()
  @IsString()
  city?: string
  @IsOptional()
  @IsString()
  district?: string
  @IsOptional()
  @IsNumber()
  @Min(0)
  bedroomNumber: number
  @IsOptional()
  @IsNumber()
  @Min(0)
  suiteNumber: number
  @IsOptional()
  @IsNumber()
  @Min(0)
  bathroomNumber: number
  @IsOptional()
  @IsNumber()
  @Min(0)
  area: number
  @IsNumber()
  @Min(0)
  parkingSpace: number
  @IsOptional()
  @IsNumber()
  rentValue?: number
  @IsOptional()
  @IsNumber()
  purchaseValue?: number
  @IsBoolean()
  condominium: boolean
  @IsBoolean()
  swimmingpool: boolean
}
