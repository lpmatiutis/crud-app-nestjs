import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {log_cobranza} from "./log_cobranza";
// import {transaccion} from "./transaccion";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";


@Entity("estado_transaccion",{schema:"redcobrosjp" } )
export class estado_transaccion {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_estado_transaccion"
        })
    id_estado_transaccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

   
    // @OneToMany(type=>log_cobranza, log_cobranza=>log_cobranza.idEstadoTransaccion)
    // logCobranzas:log_cobranza[];
    

   
    // @OneToMany(type=>transaccion, transaccion=>transaccion.estadoTransaccion)
    // transaccions:transaccion[];
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idEstadoTransaccion)
    transaccionRcs:transaccion_rc[];
    
}
