import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ciudad} from "../ciudad/ciudad.entity";
import {entidad} from "../entidad/entidad.entity";
// import {estudio_contable} from "./estudio_contable";
// import {gestor_direcciones} from "./gestor_direcciones";
import {persona} from "../persona/persona.entity";
// import {sucursal} from "./sucursal";


@Entity("localidad",{schema:"redcobrosjp" } )
export class localidad {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_localidad"
        })
    id_localidad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

   
    @ManyToOne(type=>ciudad, ciudad=>ciudad.localidads,{  nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'ciudad'})
    ciudad:ciudad | null;


   
    @OneToMany(type=>entidad, entidad=>entidad.localidad)
    entidads:entidad[];
    

   
    // @OneToMany(type=>estudio_contable, estudio_contable=>estudio_contable.localidad)
    // estudioContables:estudio_contable[];
    

   
    // @OneToMany(type=>gestor_direcciones, gestor_direcciones=>gestor_direcciones.localidad)
    // gestorDireccioness:gestor_direcciones[];
    

   
    @OneToMany(type=>persona, persona=>persona.localidad)
    personas:persona[];
    

   
    // @OneToMany(type=>sucursal, sucursal=>sucursal.localidad)
    // sucursals:sucursal[];
    
}
