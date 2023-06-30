import { Module } from '@nestjs/common'
import { RealStateService } from './real-state.service'
import { RealStateController } from './real-state.controller'

@Module({
  controllers: [RealStateController],
  providers: [RealStateService]
})
export class RealStateModule {}
