import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "../facturador/facturador.entity";
// import {clearing_facturador} from "./clearing_facturador";
// import {config_clearing_servicio} from "./config_clearing_servicio";
// import {grupo} from "./grupo";
 import {recaudador} from "../recaudador/recaudador.entity";


@Entity("servicio",{schema:"redcobrosjp" } )
//@Index("servicio_facturador_idx",["facturador","id_servicio",])
export class servicio {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_servicio"
        })
    id_servicio:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_transaccional"
        })
    codigo_transaccional:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"comentario"
        })
    comentario:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"factura_incluye_comision"
        })
    factura_incluye_comision:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"facturable"
        })
    facturable:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_cierre"
        })
    hora_cierre:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"tamanho_grupo"
        })
    tamanho_grupo:string;
        

   
    @ManyToOne(type=>facturador, facturador=>facturador.servicios,{  nullable:false, })
    @JoinColumn({ name:'facturador'})
    facturador:facturador | null;


   
    // @OneToMany(type=>clearing_facturador, clearing_facturador=>clearing_facturador.servicio)
    // clearingFacturadors:clearing_facturador[];
    

   
    // @OneToMany(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.servicio)
    // configClearingServicios:config_clearing_servicio[];
    

   
    // @OneToMany(type=>grupo, grupo=>grupo.servicio)
    // grupos:grupo[];
    

   
    @ManyToMany(type=>recaudador, recaudador=>recaudador.servicios)
    recaudadors:recaudador[];
    
}
