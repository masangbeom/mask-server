import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {CATEGORY} from "./CATEGORY";


@Entity("PORTPOLIO")
export class PORTPOLIO {

    @PrimaryGeneratedColumn({ 
        name:"pp_id"
        })
    pp_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"pp_title"
        })
    pp_title:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"pp_thumnail"
        })
    pp_thumnail:string;

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"pp_img_url"
        })
    pp_img_url:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"pp_detail"
        })
    pp_detail:string;
    
    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"pp_file_name"
        })
    pp_file_name:string;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"pp_thum_file_name"
        })
    pp_thum_file_name:string;

    @Column("datetime",{ 
        nullable:false,
        name:"pp_new_date"
        })
    pp_new_date:Date;
        

    @ManyToOne(type => CATEGORY, category => category.portpolios, { onDelete: 'CASCADE' })
    @JoinColumn({name: "cg_id"})
    category: CATEGORY;
    
    constructor(init?: Partial<PORTPOLIO>) {
		Object.assign(this, init);
	}
}
