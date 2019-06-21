import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ticket_transaccion } from './ticket_transaccion.entity';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(ticket_transaccion)
        private ticketRepository: Repository<ticket_transaccion>,
    ) { }

    async  findAll(): Promise<ticket_transaccion[]> {
        return await this.ticketRepository.find();
    }

    async  create(contact: ticket_transaccion): Promise<ticket_transaccion> {
        return await this.ticketRepository.save(contact);
    }

    async update(contact: ticket_transaccion): Promise<UpdateResult> {
        return await this.ticketRepository.update(contact.id_transaccion, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.ticketRepository.delete(id);
    }

    async findOne(id): Promise<ticket_transaccion>{
        return await this.ticketRepository.findOne(id);
    }

    async findOneother(id: Array<number>): Promise<ticket_transaccion[]> {
        return await this.ticketRepository.findByIds(id);
    }
}
