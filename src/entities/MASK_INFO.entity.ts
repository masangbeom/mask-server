import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MASK_INFO')
export class MASK_INFO {

  @PrimaryGeneratedColumn({
    name: 'mask_id',
  })
  mask_id: number;

  @Column('varchar', {
    nullable: false,
    default: '',
    name: 'mask_img_url',
  })
  mask_img_url: string;

  @Column('datetime', {
    nullable: false,
    name: 'mask_upload_date',
  })
  mask_upload_date: Date;


  @Column('datetime', {
    nullable: true,
    name: 'mask_mod_date',
  })
  mask_mod_date: Date;


  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'mask_name',
  })
  mask_name: string;

  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'mask_file_name',
  })
  mask_file_name: string;

  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'mask_description',
  })
  mask_description: string;

  @Column({
    nullable: false,
    name: 'mask_price',
  })
  mask_price: string;
}
