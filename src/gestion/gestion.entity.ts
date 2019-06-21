import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {terminal} from "../terminal/terminal.entity";
import {usuario} from "../usuario/usuario.entity";
import {transaccion_rc} from "../transaccion-rc/transaccion_rc.entity";


@Entity("gestion",{schema:"redcobrosjp" } )
//@Index("gestion_terminal_idx",["terminal",])
//@Index("gestion_usuario_idx",["usuario",])
export class gestion {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_gestion"
        })
    id_gestion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cerrado"
        })
    cerrado:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fec_hora_ult_update"
        })
    fec_hora_ult_update:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_apertura"
        })
    fecha_apertura:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cierre"
        })
    fecha_cierre:Date | null;

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_apertura"
        })
    hora_apertura:Date;


    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;


    @Column("bigint",{ 
        nullable:false,
        name:"nro_gestion"
        })
    nro_gestion:string;


    @Column("bigint",{ 
        nullable:false,
        name:"proxima_posicion"
        })
    proxima_posicion:string;



    @ManyToOne(type=>terminal, terminal=>terminal.gestions,{  nullable:false, })
    @JoinColumn({ name:'terminal'})
    terminal:terminal | null;



    @ManyToOne(type=>usuario, usuario=>usuario.gestions,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:usuario | null;


    @Column("character",{ 
        nullable:true,
        name:"migrado"
        })
    migrado:string | null;


    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idGestion)
    transaccionRcs:transaccion_rc[];

}
