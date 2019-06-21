import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from '../transaccion-rc/transaccion_rc.entity';
import {tipo_operacion} from "../tipo-operacion/tipo_operacion.entity";


@Entity("ticket_transaccion",{schema:"redcobrosjp" } )
export class ticket_transaccion extends BaseEntity {

   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.ticketTransaccions,{ primary:true, nullable:false,  cascade: true,
        eager: true,})
    //@Field(type=>ID)
    @Column({ name:'id_transaccion'})
    id_transaccion:number | null;


   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.ticketTransaccions,{ nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:tipo_operacion | null;


    @Column("character varying",{ 
        nullable:false,
        length:4000,
        name:"ticket"
        })
    ticket:string;
}
