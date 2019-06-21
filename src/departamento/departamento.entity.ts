import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {pais} from "../pais/pais.entity";
import {ciudad} from "../ciudad/ciudad.entity";
// import {departamento_ext} from "./departamento_ext";


@Entity("departamento",{schema:"redcobrosjp" } )
export class departamento {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_departamento"
        })
    id_departamento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

   
    @ManyToOne(type=>pais, pais=>pais.departamentos,{  nullable:false, })
    @JoinColumn({ name:'pais'})
    pais:pais | null;


   
    @OneToMany(type=>ciudad, ciudad=>ciudad.departamento)
    ciudads:ciudad[];
    

   
    // @OneToMany(type=>departamento_ext, departamento_ext=>departamento_ext.idDepartamentoInt)
    // departamentoExts:departamento_ext[];
    
}
