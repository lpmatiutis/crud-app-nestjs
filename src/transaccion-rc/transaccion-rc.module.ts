import { Module } from '@nestjs/common';
import { TransaccionRcService } from './transaccion-rc.service';
import { TransaccionRcController } from './transaccion-rc.controller';

@Module({
  providers: [TransaccionRcService],
  controllers: [TransaccionRcController]
})
export class TransaccionRcModule {}
