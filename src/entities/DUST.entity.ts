import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DUST')
export class DUST {

  @PrimaryGeneratedColumn({
    name: 'dust_id',
  })
  dust_id: number;

  @Column({
    nullable: false,
    name: 'cityName',
  })
  cityName: string;

  @Column({
    nullable: false,
    name: 'pm10Value',
  })
  pm10Value: number;

  @Column({
    nullable: false,
    name: 'pm25Value',
  })
  pm25Value: number;

  @Column({
    nullable: false,
    name: 'dataTime',
  })
  dataTime: string;
}
