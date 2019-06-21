import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './ticket/ticket.module';
import { TipoOperacionModule } from './tipo-operacion/tipo-operacion.module';
import { TransaccionRcModule } from './transaccion-rc/transaccion-rc.module';
import { ServicioRcModule } from './servicio-rc/servicio-rc.module';
import { GestionModule } from './gestion/gestion.module';
import { EstadoTransaccionModule } from './estado-transaccion/estado-transaccion.module';
import { TipoPagoModule } from './tipo-pago/tipo-pago.module';
import { TipoCapturaModule } from './tipo-captura/tipo-captura.module';
import { MonedaModule } from './moneda/moneda.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TerminalModule } from './terminal/terminal.module';
import { PersonaModule } from './persona/persona.module';
import { RecaudadorModule } from './recaudador/recaudador.module';
import { FacturadorModule } from './facturador/facturador.module';
import { EntidadModule } from './entidad/entidad.module';
import { LocalidadModule } from './localidad/localidad.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { PaisModule } from './pais/pais.module';
import { RespuestaCarrierModule } from './respuesta-carrier/respuesta-carrier.module';
import { RuteoServicioModule } from './ruteo-servicio/ruteo-servicio.module';
import { GrupoPaginaModule } from './grupo-pagina/grupo-pagina.module';
import { TipoPatronModule } from './tipo-patron/tipo-patron.module';
import { ComplementoModule } from './complemento/complemento.module';
import { TipoServicioModule } from './tipo-servicio/tipo-servicio.module';
import { ParametroServicioModule } from './parametro-servicio/parametro-servicio.module';
import { RecaudadorServicioModule } from './recaudador-servicio/recaudador-servicio.module';
import { ServicioCarrierModule } from './servicio-carrier/servicio-carrier.module';
import { RedModule } from './red/red.module';
import { EntidadFinancieraModule } from './entidad-financiera/entidad-financiera.module';
import { PlantillaComisionalModule } from './plantilla-comisional/plantilla-comisional.module';
import { ServicioModule } from './servicio/servicio.module';

@Module({
  imports: [ContactsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'documenta',
      schema: 'redcobrosjp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      host: '192.168.30.80',
      port: 5432,
      username: 'redcobrosjp',
      password: 'redcobrosjp'
   }),
    TicketModule,
    TipoOperacionModule,
    TransaccionRcModule,
    ServicioRcModule,
    GestionModule,
    EstadoTransaccionModule,
    TipoPagoModule,
    TipoCapturaModule,
    MonedaModule,
    UsuarioModule,
    TerminalModule,
    PersonaModule,
    RecaudadorModule,
    FacturadorModule,
    EntidadModule,
    LocalidadModule,
    CiudadModule,
    DepartamentoModule,
    PaisModule,
    RespuestaCarrierModule,
    RuteoServicioModule,
    GrupoPaginaModule,
    TipoPatronModule,
    ComplementoModule,
    TipoServicioModule,
    ParametroServicioModule,
    RecaudadorServicioModule,
    ServicioCarrierModule,
    RedModule,
    EntidadFinancieraModule,
    PlantillaComisionalModule,
    ServicioModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
