import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {departamento} from "../departamento/departamento.entity";
// import {ciudad_ext} from "./ciudad_ext";
import {localidad} from "../localidad/localidad.entity";


@Entity("ciudad",{schema:"redcobrosjp" } )
export class ciudad {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_ciudad"
        })
    id_ciudad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

   
    @ManyToOne(type=>departamento, departamento=>departamento.ciudads,{  nullable:false, })
    @JoinColumn({ name:'departamento'})
    departamento:departamento | null;


   
    // @OneToMany(type=>ciudad_ext, ciudad_ext=>ciudad_ext.idCiudadInt)
    // ciudadExts:ciudad_ext[];
    

   
    @OneToMany(type=>localidad, localidad=>localidad.ciudad)
    localidads:localidad[];
    
}
