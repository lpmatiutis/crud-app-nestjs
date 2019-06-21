import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "../localidad/localidad.entity";
import {entidad_financiera} from "../entidad-financiera/entidad_financiera.entity";
//import {estudio_contable} from "./estudio_contable";
import {facturador} from "../facturador/facturador.entity";
import {recaudador} from "../recaudador/recaudador.entity";
//import {sucursal} from "./sucursal";
import {usuario} from "../usuario/usuario.entity";


@Entity("persona",{schema:"redcobrosjp" } )
export class persona {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_persona"
        })
    id_persona:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"apellidos"
        })
    apellidos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombres"
        })
    nombres:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"ruc_ci"
        })
    ruc_ci:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"telefono"
        })
    telefono:string;
        

   
    @ManyToOne(type=>localidad, localidad=>localidad.personas,{  nullable:false, })
    @JoinColumn({ name:'localidad'})
    localidad:localidad | null;


   
    @OneToMany(type=>entidad_financiera, entidad_financiera=>entidad_financiera.contacto)
    entidadFinancieras:entidad_financiera[];
    

   
    // @OneToMany(type=>estudio_contable, estudio_contable=>estudio_contable.contacto)
    // estudioContables:estudio_contable[];
    

   
    @OneToMany(type=>facturador, facturador=>facturador.contacto)
    facturadors:facturador[];
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.contacto)
    recaudadors:recaudador[];
    

   
    // @OneToMany(type=>sucursal, sucursal=>sucursal.contacto)
    // sucursals:sucursal[];
    

   
    @OneToMany(type=>usuario, usuario=>usuario.persona)
    usuarios:usuario[];
    
}
