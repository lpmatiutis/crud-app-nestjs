import { Module } from '@nestjs/common';
import { TipoOperacionService } from './tipo-operacion.service';
import { TipoOperacionController } from './tipo-operacion.controller';

@Module({
  providers: [TipoOperacionService],
  controllers: [TipoOperacionController]
})
export class TipoOperacionModule {}
