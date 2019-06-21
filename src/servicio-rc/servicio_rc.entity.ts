import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "../facturador/facturador.entity";
import {moneda} from "../moneda/moneda.entity";
import {complemento} from "../complemento/complemento.entity";
import {tipo_servicio} from "../tipo-servicio/tipo_servicio.entity";
// import {alias_servicio_facturador} from "./alias_servicio_facturador";
// import {bin_tarj_clases} from "./bin_tarj_clases";
// import {bines_tarj_clases} from "./bines_tarj_clases";
// import {bines_tarjetas} from "./bines_tarjetas";
// import {comision_servicio} from "./comision_servicio";
// import {config_clearing_servicio} from "./config_clearing_servicio";
// import {detalle_consulta} from "./detalle_consulta";
// import {filtro_servicio} from "./filtro_servicio";
// import {filtro_servicio_tipo_captura} from "./filtro_servicio_tipo_captura";
// import {help_servicio} from "./help_servicio";
// import {limite_trx_servicio} from "./limite_trx_servicio";
// import {log_cobranza} from "./log_cobranza";
// import {log_cobranzas} from "./log_cobranzas";
// import {log_consultas} from "./log_consultas";
// import {log_transaccion_rc} from "./log_transaccion_rc";
import {parametro_servicio} from "../parametro-servicio/parametro_servicio.entity";
import {recaudador_servicio} from "../recaudador-servicio/recaudador_servicio.entity";
import {servicio_carrier} from "../servicio-carrier/servicio_carrier.entity";
// import {servicio_moneda} from "./";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";
import {grupo_pagina} from "../grupo-pagina/grupo_pagina.entity";


@Entity("servicio_rc",{schema:"redcobrosjp" } )
export class servicio_rc {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_servicio"
        })
    id_servicio:number;
        

   
    @ManyToOne(type=>facturador, facturador=>facturador.servicioRcs,{  nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:facturador | null;


   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.servicioRcs,{  })
    @JoinColumn({ name:'id_servicio_padre'})
    idServicioPadre:servicio_rc | null;


    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'S'",
        name:"anulable"
        })
    anulable:string;
        

    @Column("character",{ 
        nullable:false,
        name:"cb_presente"
        })
    cb_presente:string;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"cb_longitud"
        })
    cb_longitud:number;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.servicioRcs,{  nullable:false, })
    @JoinColumn({ name:'id_moneda'})
    idMoneda:moneda | null;


    @Column("character",{ 
        nullable:false,
        default: () => "'S'",
        name:"habilitado"
        })
    habilitado:string;
        

   
    @ManyToOne(type=>complemento, complemento=>complemento.servicioRcs,{  })
    @JoinColumn({ name:'id_complemento'})
    idComplemento:complemento | null;


   
    @ManyToOne(type=>tipo_servicio, tipo_servicio=>tipo_servicio.servicioRcs,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_servicio'})
    idTipoServicio:tipo_servicio | null;


    @Column("bytea",{ 
        nullable:true,
        name:"imagen"
        })
    imagen:Buffer | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"nombre_imagen"
        })
    nombre_imagen:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;
        

   
    // @OneToMany(type=>alias_servicio_facturador, alias_servicio_facturador=>alias_servicio_facturador.idServicio)
    // aliasServicioFacturadors:alias_servicio_facturador[];
    

   
    // @OneToMany(type=>bin_tarj_clases, bin_tarj_clases=>bin_tarj_clases.servicio)
    // binTarjClasess:bin_tarj_clases[];
    

   
    // @OneToMany(type=>bines_tarj_clases, bines_tarj_clases=>bines_tarj_clases.servicio)
    // binesTarjClasess:bines_tarj_clases[];
    

   
    // @OneToMany(type=>bines_tarjetas, bines_tarjetas=>bines_tarjetas.servicioRc)
    // binesTarjetass:bines_tarjetas[];
    

   
    // @OneToMany(type=>comision_servicio, comision_servicio=>comision_servicio.idServicio)
    // comisionServicios:comision_servicio[];
    

   
    // @OneToMany(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.servicioRc)
    // configClearingServicios:config_clearing_servicio[];
    

   
    // @OneToMany(type=>detalle_consulta, detalle_consulta=>detalle_consulta.idServicio)
    // detalleConsultas:detalle_consulta[];
    

   
    // @OneToMany(type=>filtro_servicio, filtro_servicio=>filtro_servicio.idServicio)
    // filtroServicios:filtro_servicio[];
    

   
    // @OneToMany(type=>filtro_servicio_tipo_captura, filtro_servicio_tipo_captura=>filtro_servicio_tipo_captura.idServicio)
    // filtroServicioTipoCapturas:filtro_servicio_tipo_captura[];
    

   
    // @OneToMany(type=>help_servicio, help_servicio=>help_servicio.servicio)
    // helpServicios:help_servicio[];
    

   
    // @OneToMany(type=>limite_trx_servicio, limite_trx_servicio=>limite_trx_servicio.servicio)
    // limiteTrxServicios:limite_trx_servicio[];
    

   
    // @OneToMany(type=>log_cobranza, log_cobranza=>log_cobranza.idServicio)
    // logCobranzas:log_cobranza[];
    

   
    // @OneToMany(type=>log_cobranzas, log_cobranzas=>log_cobranzas.idServicio)
    // logCobranzass:log_cobranzas[];
    

   
    // @OneToMany(type=>log_consultas, log_consultas=>log_consultas.idServicio)
    // logConsultass:log_consultas[];
    

   
    // @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.idServicio)
    // logTransaccionRcs:log_transaccion_rc[];
    

   
    @OneToMany(type=>parametro_servicio, parametro_servicio=>parametro_servicio.idServicio)
    parametroServicios:parametro_servicio[];
    

   
    @OneToMany(type=>recaudador_servicio, recaudador_servicio=>recaudador_servicio.idServicio)
    recaudadorServicios:recaudador_servicio[];
    

   
    @OneToMany(type=>servicio_carrier, servicio_carrier=>servicio_carrier.idServicio)
    servicioCarriers:servicio_carrier[];
    

   
    // @OneToMany(type=>servicio_moneda, servicio_moneda=>servicio_moneda.servicio)
    // servicioMonedas:servicio_moneda[];
    

   
    @OneToMany(type=>servicio_rc, servicio_rc=>servicio_rc.idServicioPadre)
    servicioRcs:servicio_rc[];
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idServicio)
    transaccionRcs:transaccion_rc[];
    

   
    @ManyToMany(type=>grupo_pagina, grupo_pagina=>grupo_pagina.servicioRcs,{  nullable:false, })
    @JoinTable({ name:'servicio_grupo_pagina'})
    grupoPaginas:grupo_pagina[];
    
}
