import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "../persona/persona.entity";
import {entidad} from "../entidad/entidad.entity";
import {red} from "../red/red.entity";
 import {plantilla_comisional} from "../plantilla-comisional/plantilla_comisional.entity";
// import {configuracion_comisional} from "./configuracion_comisional";
// import {dist_clearing_fact} from "./dist_clearing_fact";
// import {distribucion_clearing} from "./distribucion_clearing";
// import {filtro_servicio} from "./filtro_servicio";
// import {gestor} from "./gestor";
// import {informacion} from "./informacion";
// import {limite_recaudador} from "./limite_recaudador";
// import {limite_trx_servicio} from "./limite_trx_servicio";
// import {promo_personal_rec} from "./promo_personal_rec";
// import {rec_retenido} from "./rec_retenido";
import {recaudador_servicio} from "../recaudador-servicio/recaudador_servicio.entity";
// import {red_recaudador} from "../re";
// import {red_recaudador_numero_orden} from "./red_recaudador_numero_orden";
// import {sucursal} from "./sucursal";
import {usuario} from "../usuario/usuario.entity";
import {servicio} from "../servicio/servicio.entity";


@Entity("recaudador",{schema:"redcobrosjp" } )
//@Index("recaudador_codigo_recaudador_key",["codigo_recaudador",],{unique:true})
export class recaudador {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_recaudador"
        })
    id_recaudador:string;
        

    @Column("bigint",{ 
        nullable:false,
        unique: true,
        name:"codigo_recaudador"
        })
    codigo_recaudador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_orden_maximo"
        })
    numero_orden_maximo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_orden_proximo"
        })
    numero_orden_proximo:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_orden_tam_rango"
        })
    numero_orden_tam_rango:string;
        

   
    @ManyToOne(type=>persona, persona=>persona.recaudadors,{  nullable:false, })
    @JoinColumn({ name:'contacto'})
    contacto:persona | null;


   
    @ManyToOne(type=>entidad, entidad=>entidad.recaudadors,{  nullable:false, })
    @JoinColumn({ name:'entidad'})
    entidad:entidad | null;


   
    @ManyToOne(type=>red, red=>red.recaudadors,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:red | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta_comision"
        })
    numero_cuenta_comision:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"habilitado"
        })
    habilitado:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"conciliar_caja"
        })
    conciliar_caja:string | null;
        

   
    @ManyToOne(type=>plantilla_comisional, plantilla_comisional=>plantilla_comisional.recaudadors,{  })
    @JoinColumn({ name:'plantilla_comisional'})
    plantillaComisional:plantilla_comisional | null;


    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"responsable"
        })
    responsable:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"cabecera"
        })
    cabecera:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_alta"
        })
    fecha_alta:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_baja"
        })
    fecha_baja:Date | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"retenido"
        })
    retenido:string | null;
        

   
    // @OneToMany(type=>configuracion_comisional, configuracion_comisional=>configuracion_comisional.recaudador)
    // configuracionComisionals:configuracion_comisional[];
    

   
    // @OneToMany(type=>dist_clearing_fact, dist_clearing_fact=>dist_clearing_fact.recaudador)
    // distClearingFacts:dist_clearing_fact[];
    

   
    // @OneToMany(type=>distribucion_clearing, distribucion_clearing=>distribucion_clearing.recaudador)
    // distribucionClearings:distribucion_clearing[];
    

   
    // @OneToMany(type=>filtro_servicio, filtro_servicio=>filtro_servicio.idRecaudador)
    // filtroServicios:filtro_servicio[];
    

   
    // @OneToMany(type=>gestor, gestor=>gestor.recaudador)
    // gestors:gestor[];
    

   
    // @OneToMany(type=>informacion, informacion=>informacion.recaudador)
    // informacions:informacion[];
    

   
    // @OneToMany(type=>limite_recaudador, limite_recaudador=>limite_recaudador.recaudador)
    // limiteRecaudadors:limite_recaudador[];
    

   
    // @OneToMany(type=>limite_trx_servicio, limite_trx_servicio=>limite_trx_servicio.recaudador)
    // limiteTrxServicios:limite_trx_servicio[];
    

   
    // @OneToMany(type=>promo_personal_rec, promo_personal_rec=>promo_personal_rec.recaudador)
    // promoPersonalRecs:promo_personal_rec[];
    

   
    // @OneToMany(typlantilla_comisionalnido=>rec_retenido.recaudador)
    // recRetenidos:plantilla_comisional
    
    @OneToMany(type=>recaudador_servicio, recaudador_servicio=>recaudador_servicio.idRecaudador)
    recaudadorServicios:recaudador_servicio[];
    

   
    // @OneToMany(type=>red_recaudador, red_recaudador=>red_recaudador.idRecaudador)
    // redRecaudadors:red_recaudador[];
    

   
    // @OneToMany(type=>red_recaudador_numero_orden, red_recaudador_numero_orden=>red_recaudador_numero_orden.recaudador)
    // redRecaudadorNumeroOrdens:red_recaudador_numero_orden[];
    

   
    // @OneToMany(type=>sucursal, sucursal=>sucursal.recaudador)
    // sucursals:sucursal[];
    

   
    @OneToMany(type=>usuario, usuario=>usuario.recaudador)
    usuarios:usuario[];
    

   
    @ManyToMany(type=>servicio, servicio=>servicio.recaudadors,{  nullable:false, })
    @JoinTable({ name:'habilitacion_serv_rec'})
    servicios:servicio[];
    
}
