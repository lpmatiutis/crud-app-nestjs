import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {departamento} from "../departamento/departamento.entity";


@Entity("pais",{schema:"redcobrosjp" } )
export class pais {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_pais"
        })
    id_pais:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"iso_3166_1_alfa_2"
        })
    iso_3166_1_alfa_2:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3,
        name:"iso_3166_1_alfa_3"
        })
    iso_3166_1_alfa_3:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"caracteristica"
        })
    caracteristica:number | null;
        

   
    @OneToMany(type=>departamento, departamento=>departamento.pais)
    departamentos:departamento[];
    
}
