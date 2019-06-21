import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "../localidad/localidad.entity";
// import {cuenta_entidad} from "./cuenta_entidad";
 import {entidad_financiera} from "../entidad-financiera/entidad_financiera.entity";
// import {entidad_politica} from "./entidad_politica";
import {facturador} from "../facturador/facturador.entity";
import {recaudador} from "../recaudador/recaudador.entity";
 import {red} from "../red/red.entity";
// import {usuario_entidad} from "./usuario_entidad";


@Entity("entidad",{schema:"redcobrosjp" } )
export class entidad {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad"
        })
    id_entidad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ruc_ci"
        })
    ruc_ci:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"telefono"
        })
    telefono:string | null;
        

   
    @ManyToOne(type=>localidad, localidad=>localidad.entidads,{  nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'localidad'})
    localidad:localidad | null;


   
    // @OneToMany(type=>cuenta_entidad, cuenta_entidad=>cuenta_entidad.idEntidad)
    // cuentaEntidads:cuenta_entidad[];
    

   
    @OneToMany(type=>entidad_financiera, entidad_financiera=>entidad_financiera.entidad)
    entidadFinancieras:entidad_financiera[];
    

   
    // @OneToMany(type=>entidad_politica, entidad_politica=>entidad_politica.entidad)
    // entidadPoliticas:entidad_politica[];
    

   
    @OneToMany(type=>facturador, facturador=>facturador.entidad)
    facturadors:facturador[];
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.entidad)
    recaudadors:recaudador[];
    

   
    @OneToMany(type=>red, red=>red.entidad)
    reds:red[];
    

   
    // @OneToMany(type=>usuario_entidad, usuario_entidad=>usuario_entidad.idEntidad)
    // usuarioEntidads:usuario_entidad[];
    
}
