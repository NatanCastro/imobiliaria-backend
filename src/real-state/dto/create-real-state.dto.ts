import { OmitType, PartialType } from '@nestjs/mapped-types'
import { RealState } from '../entities/real-state.entity'
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, Min } from 'class-validator'

export class CreateRealStateDto extends OmitType(PartialType(RealState), ['id']) {
  @IsString()
  name: string
  @IsString()
  description: string
  @IsString()
  number: string
  @IsString()
  street: string
  @IsString()
  city: string
  @IsString()
  district: string
  @IsNumber()
  @Min(0)
  bedroomNumber: number
  @IsNumber()
  @Min(0)
  bathroomNumber: number
  @IsNumber()
  @Min(0)
  area: number
  @IsNumber()
  @Min(0)
  parkingSpace?: number
  @IsOptional()
  @IsNumber()
  rentValue?: number
  @IsOptional()
  @IsNumber()
  purchaseValue?: number
  @IsOptional()
  @IsArray()
  images: string[]
  @IsBoolean()
  condominium: boolean
  @IsBoolean()
  swimmingpool: boolean
}
