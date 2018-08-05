import {Index,Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("NOTICE")
export class NOTICE {

    @PrimaryGeneratedColumn({ 
        name:"nt_id"
        })
    nt_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"nt_title"
        })
    nt_title:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"nt_content"
        })
    nt_content:string;

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"nt_file_name"
        })
    nt_file_name:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"nt_date"
        })
    nt_date:Date;
        
    constructor(init?: Partial<NOTICE>) {
		Object.assign(this, init);
	}
}
