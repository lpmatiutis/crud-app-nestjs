import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "../recaudador/recaudador.entity";


@Entity("plantilla_comisional",{schema:"redcobrosjp" } )
export class plantilla_comisional {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_plantilla_comisional"
        })
    id_plantilla_comisional:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion2"
        })
    descripcion2:string | null;
        

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.plantillaComisional)
    recaudadors:recaudador[];
    
}
