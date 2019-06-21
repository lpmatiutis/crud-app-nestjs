import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {cotizacion} from "./cotizacion";
// import {facturador_tasa} from "./facturador_tasa";
// import {limite_rec_trx} from "./limite_rec_trx";
// import {limite_recaudador} from "./limite_recaudador";
// import {limite_trx_servicio} from "./limite_trx_servicio";
// import {log_transaccion_rc} from "./log_transaccion_rc";
// import {recaudador_moneda} from "./recaudador_moneda";
// import {servicio_moneda} from "./servicio_moneda";
import {servicio_rc} from "../servicio-rc/servicio_rc.entity";
// import {sucursal_moneda} from "./sucursal_moneda";
// import {terminal_moneda} from "./terminal_moneda";
// import {transaccion} from "./transaccion";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";


@Entity("moneda",{schema:"redcobrosjp" } )
export class moneda {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_moneda"
        })
    id_moneda:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character",{ 
        nullable:false,
        name:"soportado"
        })
    soportado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"abreviatura"
        })
    abreviatura:string | null;
        

   
    // @OneToOne(type=>cotizacion, cotizacion=>cotizacion.moneda)
    // cotizacion:cotizacion | null;


   
    // @OneToMany(type=>facturador_tasa, facturador_tasa=>facturador_tasa.moneda)
    // facturadorTasas:facturador_tasa[];
    

   
    // @OneToMany(type=>limite_rec_trx, limite_rec_trx=>limite_rec_trx.moneda)
    // limiteRecTrxs:limite_rec_trx[];
    

   
    // @OneToMany(type=>limite_recaudador, limite_recaudador=>limite_recaudador.moneda)
    // limiteRecaudadors:limite_recaudador[];
    

   
    // @OneToMany(type=>limite_trx_servicio, limite_trx_servicio=>limite_trx_servicio.moneda)
    // limiteTrxServicios:limite_trx_servicio[];
    

   
    // @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.moneda)
    // logTransaccionRcs:log_transaccion_rc[];
    

   
    // @OneToMany(type=>recaudador_moneda, recaudador_moneda=>recaudador_moneda.moneda)
    // recaudadorMonedas:recaudador_moneda[];
    

   
    // @OneToMany(type=>servicio_moneda, servicio_moneda=>servicio_moneda.moneda)
    // servicioMonedas:servicio_moneda[];
    

   
    @OneToMany(type=>servicio_rc, servicio_rc=>servicio_rc.idMoneda)
    servicioRcs:servicio_rc[];
    

   
    // @OneToMany(type=>sucursal_moneda, sucursal_moneda=>sucursal_moneda.moneda)
    // sucursalMonedas:sucursal_moneda[];
    

   
    // @OneToMany(type=>terminal_moneda, terminal_moneda=>terminal_moneda.moneda)
    // terminalMonedas:terminal_moneda[];
    

   
    // @OneToMany(type=>transaccion, transaccion=>transaccion.moneda)
    // transaccions:transaccion[];
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.moneda)
    transaccionRcs:transaccion_rc[];
    
}
