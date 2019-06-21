import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {filtro_servicio} from "./filtro_servicio";
import {gestion} from "../gestion/gestion.entity";
// import {informacion} from "./informacion";
// import {terminal_audit} from "./terminal_audit";
// import {usuario_terminal} from "./usuario_terminal";


@Entity("terminal",{schema:"redcobrosjp" } )
//@Index("codigo_caja_set_uk",["codigo_caja_set","sucursal",])
//@Index("terminal_sucursal_idx",["sucursal",])
export class terminal {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_terminal"
        })
    id_terminal:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo_caja_set"
        })
    codigo_caja_set:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo_terminal"
        })
    codigo_terminal:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"consecutivo_actual_bp"
        })
    consecutivo_actual_bp:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"consecutivo_actual_form"
        })
    consecutivo_actual_form:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_consecutivo_set"
        })
    fecha_consecutivo_set:Date | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"proximo_nro_gestion"
        })
    proximo_nro_gestion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"url_impresora"
        })
    url_impresora:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"sucursal"
        })
    sucursal:string;
        

   
    // @OneToMany(type=>filtro_servicio, filtro_servicio=>filtro_servicio.idTerminal)
    // filtroServicios:filtro_servicio[];
    

   
    @OneToMany(type=>gestion, gestion=>gestion.terminal)
    gestions:gestion[];
    

   
    // @OneToMany(type=>informacion, informacion=>informacion.terminal)
    // informacions:informacion[];
    

   
    // @OneToMany(type=>terminal_audit, terminal_audit=>terminal_audit.idTerminal)
    // terminalAudits:terminal_audit[];
    

   
    // @OneToMany(type=>usuario_terminal, usuario_terminal=>usuario_terminal.terminal)
    // usuarioTerminals:usuario_terminal[];
    
}
