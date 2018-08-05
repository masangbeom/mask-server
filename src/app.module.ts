import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaskModule } from './modules/mask/mask.module';
import { DustModule } from './modules/dust/dust.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mask.cyrtswz4vjky.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'tonystark',
      password: 'qhdks2868%',
      database: 'mask',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MaskModule,
    DustModule,
  ],
  controllers: [AppController],
  providers: [ AppService ],
})
export class AppModule {}
