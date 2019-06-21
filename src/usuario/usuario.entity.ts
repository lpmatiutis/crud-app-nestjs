import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "../persona/persona.entity";
import {recaudador} from "../recaudador/recaudador.entity";
import {gestion} from "../gestion/gestion.entity";
// import {rol_de_usuario} from "./rol_de_usuario";
// import {usuario_gestor} from "./usuario_gestor";
// import {usuario_supervisor} from "./usuario_supervisor";
// import {usuario_terminal} from "./usuario_terminal";


@Entity("usuario",{schema:"redcobrosjp" } )
export class usuario {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_usuario"
        })
    id_usuario:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"contrasenha"
        })
    contrasenha:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"es_supervisor"
        })
    es_supervisor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre_usuario"
        })
    nombre_usuario:string;
        

   
    @ManyToOne(type=>persona, persona=>persona.usuarios,{  nullable:false, })
    @JoinColumn({ name:'persona'})
    persona:persona | null;


   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.usuarios,{  })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


    @Column("bigint",{ 
        nullable:true,
        name:"cod_externo"
        })
    cod_externo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"cambiar_password"
        })
    cambiar_password:string | null;
        

   
    @OneToMany(type=>gestion, gestion=>gestion.usuario)
    gestions:gestion[];
    

   
    // @OneToMany(type=>rol_de_usuario, rol_de_usuario=>rol_de_usuario.usuario)
    // rolDeUsuarios:rol_de_usuario[];
    

   
    // @OneToMany(type=>usuario_gestor, usuario_gestor=>usuario_gestor.usuario)
    // usuarioGestors:usuario_gestor[];
    

   
    // @OneToMany(type=>usuario_supervisor, usuario_supervisor=>usuario_supervisor.supervisor)
    // usuarioSupervisors:usuario_supervisor[];
    

   
    // @OneToMany(type=>usuario_supervisor, usuario_supervisor=>usuario_supervisor.usuario)
    // usuarioSupervisors2:usuario_supervisor[];
    

   
    // @OneToMany(type=>usuario_terminal, usuario_terminal=>usuario_terminal.usuario)
    // usuarioTerminals:usuario_terminal[];
    
}
