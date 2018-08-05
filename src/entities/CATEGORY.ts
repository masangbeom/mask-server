import {Index,Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {PORTPOLIO} from "./PORTPOLIO";


@Entity("CATEGORY")
export class CATEGORY {
    @PrimaryGeneratedColumn({ 
        name:"cg_id"
        })
    cg_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"cg_name"
        })
    cg_name:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"cg_new_date"
        })
    cg_new_date:Date;

    @OneToMany(type => PORTPOLIO, portpolio => portpolio.category)
    portpolios: PORTPOLIO[];
    
    constructor(init?: Partial<CATEGORY>) {
		Object.assign(this, init);
	}
}
