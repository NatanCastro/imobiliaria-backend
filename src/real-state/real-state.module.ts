import { Module } from '@nestjs/common'
import { RealStateService } from './real-state.service'
import { RealStateController } from './real-state.controller'
import { CloudinaryService } from '../cloudinary/cloudinary.service'

@Module({
  controllers: [RealStateController],
  providers: [RealStateService, CloudinaryService]
})
export class RealStateModule {}
