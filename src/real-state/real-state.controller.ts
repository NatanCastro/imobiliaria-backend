import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common'
import { RealStateService } from './real-state.service'
import { CreateRealStateDto } from './dto/create-real-state.dto'
import { UpdateRealStateDto } from './dto/update-real-state.dto'
import { FindRealState } from './dto/find-real-state.dto'
import { FilesInterceptor } from '@nestjs/platform-express'

@Controller('real-state')
export class RealStateController {
  constructor(private readonly realStateService: RealStateService) {}

  @Post()
  create(@Body() createRealStateDto: CreateRealStateDto) {
    return this.realStateService.create(createRealStateDto)
  }

  @Post('upload-images')
  @UseInterceptors(
    FilesInterceptor('files', undefined, {
      fileFilter: (_req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
          return cb(null, false)
        }
        cb(null, true)
      }
    })
  )
  async uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
    const images = await this.realStateService.uploadImages(files)
    return images
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
      take: take,
      skip: skip,
      where: {
        city: {
          equals: city
        },
        district: {
          equals: district
        },
        area: {
          gte: minArea,
          lte: maxArea
        },
        bedroomNumber: {
          gte: bedroomNumber
        },
        bathroomNumber: {
          gte: bathroomNumber
        },
        purchaseValue: {
          gte: minPValue,
          lte: maxPValue,
          not: notPValue
        },
        rentValue: {
          gte: minRValue,
          lte: maxRValue,
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

  @Patch(':id/update-lessor')
  updateLessor(@Param('id', new ParseUUIDPipe()) id: string, updateLessorDto: { lessorId: string }) {
    return this.realStateService.updateLessorId(id, updateLessorDto.lessorId)
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.realStateService.remove(id)
  }
}
