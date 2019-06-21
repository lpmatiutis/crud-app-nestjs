import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {filtro_servicio_tipo_captura} from "./filtro_servicio_tipo_captura";
// import {log_transaccion_rc} from "./log_transaccion_rc";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";


@Entity("tipo_captura",{schema:"redcobrosjp" } )
export class tipo_captura {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_captura"
        })
    id_tipo_captura:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"alias"
        })
    alias:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        

   
    // @OneToMany(type=>filtro_servicio_tipo_captura, filtro_servicio_tipo_captura=>filtro_servicio_tipo_captura.idTipoCaptura)
    // filtroServicioTipoCapturas:filtro_servicio_tipo_captura[];
    

   
    // @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.idTipoCaptura)
    // logTransaccionRcs:log_transaccion_rc[];
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idTipoCaptura)
    transaccionRcs:transaccion_rc[];
    
}
