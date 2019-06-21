import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {grupo_pagina} from "../grupo-pagina/grupo_pagina.entity";


@Entity("tipo_patron",{schema:"redcobrosjp" } )
export class tipo_patron {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_patron"
        })
    id_tipo_patron:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"alias"
        })
    alias:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @ManyToMany(type=>grupo_pagina, grupo_pagina=>grupo_pagina.tipoPatrons)
    grupoPaginas:grupo_pagina[];
    
}
