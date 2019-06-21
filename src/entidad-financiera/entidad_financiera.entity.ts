import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "../persona/persona.entity";
import {entidad} from "../entidad/entidad.entity";
// import {cuenta} from "./cuenta";
import {red} from "../red/red.entity";
// import {registro_cheque} from "./registro_cheque";
// import {transaccion} from "./transaccion";


@Entity("entidad_financiera",{schema:"redcobrosjp" } )
export class entidad_financiera {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad_financiera"
        })
    id_entidad_financiera:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string | null;
        

   
    @ManyToOne(type=>persona, persona=>persona.entidadFinancieras,{  nullable:false, })
    @JoinColumn({ name:'contacto'})
    contacto:persona | null;


   
    @ManyToOne(type=>entidad, entidad=>entidad.entidadFinancieras,{  nullable:false, })
    @JoinColumn({ name:'entidad'})
    entidad:entidad | null;


    @Column("smallint",{ 
        nullable:true,
        name:"cod_ref"
        })
    cod_ref:number | null;
        

   
    // @OneToMany(type=>cuenta, cuenta=>cuenta.entidadFinanciera)
    // cuentas:cuenta[];
    

   
    @OneToMany(type=>red, red=>red.bancoClearing)
    reds:red[];
    

   
    // @OneToMany(type=>registro_cheque, registro_cheque=>registro_cheque.idEntidadFinanciera)
    // registroCheques:registro_cheque[];
    

   
    // @OneToMany(type=>transaccion, transaccion=>transaccion.entidadFinanciera)
    // transaccions:transaccion[];
    
}
