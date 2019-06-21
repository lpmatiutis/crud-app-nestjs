import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {numero_ot} from "./numero_ot";
// import {numero_ot2} from "./numero_ot2";
// import {transaccion} from "./transaccion";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";


@Entity("tipo_pago",{schema:"redcobrosjp" } )
export class tipo_pago {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_pago"
        })
    id_tipo_pago:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character",{ 
        nullable:true,
        name:"soportado"
        })
    soportado:string | null;
        

   
    // @OneToMany(type=>numero_ot, numero_ot=>numero_ot.tipoPago)
    // numeroOts:numero_ot[];
    

   
    // @OneToMany(type=>numero_ot2, numero_ot2=>numero_ot2.tipoPago)
    // numeroOts2:numero_ot2[];
    

   
    // @OneToMany(type=>transaccion, transaccion=>transaccion.tipoPago)
    // transaccions:transaccion[];
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idTipoPago)
    transaccionRcs:transaccion_rc[];
    
}
