import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
 import {servicio_rc} from "../servicio-rc/servicio_rc.entity";
 import {tipo_operacion} from "../tipo-operacion/tipo_operacion.entity";
 import {gestion} from "../gestion/gestion.entity";
 import {estado_transaccion} from "../estado-transaccion/estado_transaccion.entity";
 import {tipo_pago} from "../tipo-pago/tipo_pago.entity";
 import {tipo_captura} from "../tipo-captura/tipo_captura.entity";
 import {moneda} from "../moneda/moneda.entity";

// import {conciliacion_rua_conti} from "./conciliacion_rua_conti";
// import {dato_adicional_trx} from "./dato_adicional_trx";
// import {detalle_en_linea} from "./detalle_en_linea";
// import {log_transaccion_rc} from "./log_transaccion_rc";
// import {registro_cheque} from "./registro_cheque";
import {ticket_transaccion} from "../ticket/ticket_transaccion.entity";
// import {transaccion_clubcajero} from "./transaccion_clubcajero";
// import {transaccion_hb} from "./transaccion_hb";


@Entity("transaccion_rc",{schema:"redcobrosjp" } )
// @Index("ix_trx_rc_reportecu",["anulado","fecha_ingreso","idEstadoTransaccion","idTipoOperacion","id_transaccion",])
// @Index("ix_trx_rc_fecha_ingreso",["fecha_ingreso",])
// @Index("idx_transaccion_rc_3_id",["idEstadoTransaccion","idServicio","idTipoOperacion",])
// @Index("transaccion_rc_gestion_idx",["idGestion",])
// @Index("trx_ref_gestion",["idGestion","referencia_pago",])
export class transaccion_rc {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.transaccionRcs,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;


   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.transaccionRcs,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:tipo_operacion | null;


   
    @ManyToOne(type=>gestion, gestion=>gestion.transaccionRcs,{  nullable:false, })
    @JoinColumn({ name:'id_gestion'})
    idGestion:gestion | null;


   
    @ManyToOne(type=>estado_transaccion, estado_transaccion=>estado_transaccion.transaccionRcs,{  nullable:false, })
    @JoinColumn({ name:'id_estado_transaccion'})
    idEstadoTransaccion:estado_transaccion | null;


    @Column("integer",{ 
        nullable:false,
        name:"nro_boleta"
        })
    nro_boleta:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"anulado"
        })
    anulado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"referencia_pago"
        })
    referencia_pago:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

   
    @ManyToOne(type=>tipo_pago, tipo_pago=>tipo_pago.transaccionRcs,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_pago'})
    idTipoPago:tipo_pago | null;


   
    @ManyToOne(type=>tipo_captura, tipo_captura=>tipo_captura.transaccionRcs,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_captura'})
    idTipoCaptura:tipo_captura | null;


    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"comision"
        })
    comision:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_corte"
        })
    id_corte:string | null;


    @Column("character varying",{ 
        nullable:true,
        length:120,
        name:"referencia_consulta"
        })
    referencia_consulta:string | null;


    @Column("character",{ 
        nullable:true,
        name:"notificado"
        })
    notificado:string | null;


    @Column("character",{ 
        nullable:true,
        name:"migrado"
        })
    migrado:string | null;


    @Column("integer",{ 
        nullable:true,
        name:"tasa"
        })
    tasa:number | null;

    @ManyToOne(type=>moneda, moneda=>moneda.transaccionRcs,{  })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"server"
        })
    server:string | null;

    @OneToMany(type=>ticket_transaccion, ticket_transaccion=>ticket_transaccion.id_transaccion)
    ticketTransaccions:ticket_transaccion[];

}
