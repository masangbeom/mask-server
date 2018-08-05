import {Index,Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("BANNER")
export class BANNER {

    @PrimaryGeneratedColumn({ 
        name:"bn_id"
        })
    bn_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        default:"",
        name:"bn_img_url"
        })
    bn_img_url:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"bn_upload_date"
        })
    bn_upload_date:Date;
        

    @Column("datetime",{ 
        nullable:true,
        name:"bn_mod_date"
        })
    bn_mod_date:Date;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"bn_name"
        })
    bn_name:string;

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"bn_file_name"
        })
    bn_file_name:string;
        
    constructor(init?: Partial<BANNER>) {
		Object.assign(this, init);
	}
}
