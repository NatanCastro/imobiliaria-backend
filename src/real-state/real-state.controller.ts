import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common'
import { RealStateService } from './real-state.service'
import { CreateRealStateDto } from './dto/create-real-state.dto'
import { UpdateRealStateDto } from './dto/update-real-state.dto'
import { FindRealState } from './dto/find-real-state.dto'

@Controller('real-state')
export class RealStateController {
  constructor(private readonly realStateService: RealStateService) {}

  @Post()
  create(@Body() createRealStateDto: CreateRealStateDto) {
    return this.realStateService.create(createRealStateDto)
  }

  @Get()
  find(@Query() findRealState: FindRealState) {
    const {
      take,
      skip,
      city,
      district,
      maxArea,
      minArea,
      maxPValue,
      maxRValue,
      minPValue,
      minRValue,
      notPValue,
      notRValue,
      bedroomNumber,
      bathroomNumber
    } = findRealState
    return this.realStateService.find({
      take: Number(take) || undefined,
      skip: Number(skip) || undefined,
      where: {
        city: city
          ? {
              equals: city
            }
          : undefined,
        district: district
          ? {
              equals: district
            }
          : undefined,
        area: {
          gte: Number(minArea) || undefined,
          lte: Number(maxArea) || undefined
        },
        bedroomNumber: {
          gte: Number(bedroomNumber) || undefined
        },
        bathroomNumber: {
          gte: Number(bathroomNumber) || undefined
        },
        purchaseValue: {
          gte: Number(minPValue) || undefined,
          lte: Number(maxPValue) || undefined,
          not: notPValue
        },
        rentValue: {
          gte: Number(minRValue) || undefined,
          lte: Number(maxRValue) || undefined,
          not: notRValue
        }
      }
    })
  }

  @Get('cities')
  getCities() {
    return this.realStateService.getCities()
  }

  @Get('cities/:city')
  getDistrictsByCity(@Param('city') city: string) {
    return this.realStateService.getDistrictsByCity(city)
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.realStateService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateRealStateDto: UpdateRealStateDto) {
    return this.realStateService.update(id, updateRealStateDto)
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.realStateService.remove(id)
  }
}
