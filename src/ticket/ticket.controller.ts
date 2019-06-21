import { Controller, Get, Post,Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { ticket_transaccion } from './ticket_transaccion.entity';

@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService) {

    }
    @Get()
    @HttpCode(200)
    index(): Promise<ticket_transaccion[]>{
        return this.ticketService.findAll();
    }

    @Get('find/:id')
    async find(@Param('id') id:number, @Body() contactData: ticket_transaccion): Promise<ticket_transaccion>{
        return this.ticketService.findOne(id);
    }

    @Get('findother/')
    async findother(): Promise<ticket_transaccion[]>{
        let ids: Array<number>;
        ids = [1,2,3,4];
        //id.push;
        return this.ticketService.findOneother(ids);
    }

    @Post('create')
    async create(@Body() contactData: ticket_transaccion): Promise<any> {
      return this.ticketService.create(contactData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: ticket_transaccion): Promise<any> {
        contactData.id_transaccion = Number(id);
        console.log('Update #' + contactData.id_transaccion)
        return this.ticketService.update(contactData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.ticketService.delete(id);
    }
}
