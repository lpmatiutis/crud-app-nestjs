import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "../servicio-rc/servicio_rc.entity";
import {tipo_operacion} from "../tipo-operacion/tipo_operacion.entity";
// import {detalle_en_linea} from "./detalle_en_linea";


@Entity("servicio_carrier",{schema:"redcobrosjp" } )
export class servicio_carrier {

    @Column("smallint",{ 
        nullable:false,
        name:"id_servicio_carrier"
        })
    id_servicio_carrier:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.servicioCarriers,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;


    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.servicioCarriers,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:tipo_operacion | null;


   
    // @OneToMany(type=>detalle_en_linea, detalle_en_linea=>detalle_en_linea.idServicio)
    // detalleEnLineas:detalle_en_linea[];
    

   
    // @OneToMany(type=>detalle_en_linea, detalle_en_linea=>detalle_en_linea.idTipoOperacion)
    // detalleEnLineas2:detalle_en_linea[];
    
}
