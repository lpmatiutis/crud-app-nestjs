import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ticket_transaccion } from './ticket_transaccion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ticket_transaccion]),
  ],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketModule {}
