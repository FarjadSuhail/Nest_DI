import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService],
  controllers: [CpuController],
})
export class CpuModule {}
