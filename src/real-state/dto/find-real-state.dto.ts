import { Type } from 'class-transformer'
import { IsInt, IsNumber, IsOptional } from 'class-validator'

export class FindRealState {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip?: number
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take?: number
  @IsOptional()
  city?: string
  @IsOptional()
  district?: string
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minArea?: number
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxArea?: number
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  bedroomNumber?: number
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  bathroomNumber?: number
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minPValue?: number
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxPValue?: number
  @IsOptional()
  notPValue?: null
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minRValue?: number
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxRValue?: number
  @IsOptional()
  notRValue?: null
}
