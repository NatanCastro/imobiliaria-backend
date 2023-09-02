import { PartialType } from '@nestjs/mapped-types'
import { CreateRealStateDto } from './create-real-state.dto'
import { IsNumber, IsOptional, IsString, Min } from 'class-validator'
import { Type } from 'class-transformer'

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
  state?: string
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
  @Type(() => Boolean)
  condominium: boolean
  @Type(() => Boolean)
  swimmingpool: boolean
  @IsOptional()
  @IsString()
  lessorId: string
}
