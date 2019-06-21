import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "../facturador/facturador.entity";


@Entity("respuesta_carrier",{schema:"redcobrosjp" } )
export class respuesta_carrier {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:10,
        name:"id_respuesta_carrier"
        })
    id_respuesta_carrier:string;
        

   
    @ManyToOne(type=>facturador, facturador=>facturador.respuestaCarriers,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:facturador | null;


    @Column("character",{ 
        nullable:false,
        name:"aprobado"
        })
    aprobado:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        
}
