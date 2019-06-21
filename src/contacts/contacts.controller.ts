import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {

    }
    @Get()
    index(): Promise<Contact[]>{
        return this.contactsService.findAll();
    }

    @Get('find/:id')
    async find(@Param('id') id, @Body() contactData: Contact): Promise<Contact>{
        return this.contactsService.findOne(id);
    }

    @Get('findother/')
    async findother(): Promise<Contact[]>{
        let ids: Array<number>;
        ids = [1,2,3,4];
        //id.push;
        return this.contactsService.findOneother(ids);
    }

    @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
      return this.contactsService.create(contactData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactsService.delete(id);
    }
}
