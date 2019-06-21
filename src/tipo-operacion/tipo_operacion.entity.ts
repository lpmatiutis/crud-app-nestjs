import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ticket_transaccion} from "../ticket/ticket_transaccion.entity";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";
import {servicio_carrier} from "../servicio-carrier/servicio_carrier.entity";


@Entity("tipo_operacion",{schema:"redcobrosjp" } )
@Index(["id_tipo_operacion"],{unique:true})
export class tipo_operacion {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_operacion"
        })
    id_tipo_operacion:number;

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"clase"
        })
    clase:string;

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"alias"
        })s
    alias:string | null;

    

    @OneToMany(type=>ticket_transaccion, ticket_transaccion =>ticket_transaccion.idTipoOperacion)
    ticketTransaccions:ticket_transaccion[];

    @OneToMany(type=>transaccion_rc, transaccion_rc => transaccion_rc.idTipoOperacion)
    transaccionRcs:transaccion_rc[];

    @OneToMany(type=>servicio_carrier, servicio_carrier=>servicio_carrier.idTipoOperacion)
    servicioCarriers:servicio_carrier[];
    }