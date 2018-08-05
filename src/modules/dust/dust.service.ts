import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MASK_INFO } from '../../entities/MASK_INFO.entity';
import { Repository } from 'typeorm';
import { DUST } from '../../entities/DUST.entity';
import { setInterval } from 'timers';

@Injectable()
export class DustService {
  getDustAPIUrl = `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst?`;
  getDustServiceKey = `ServiceKey=oLKH6ndSg8MpjFgEsPs2z8C8cdksvUa61Y27NzARIjVCXaojQLpU107emMo%2B9aY1ZHdU%2FAENk4EmMhPCJMNyRw%3D%3D&`;
  getDustAPIVal = `sidoName=%EB%B6%80%EC%82%B0&`;
  getDustReturnType = `searchCondition=HOUR&_returnType=json`;
  oneHour = 1000 * 3;
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(DUST)
    private readonly dustRepository: Repository<DUST>,
  ) {
    setInterval(async () => {
      await this.saveDustState('금정구');
      console.log('미세먼지 데이터 업데이트',  new Date());
    }, this.oneHour);
  }

  async getDustInfo() {
    return await this.httpService.get(this.getDustAPIUrl + this.getDustServiceKey + this.getDustAPIVal + this.getDustReturnType).toPromise();
  }

  async saveDustState(cityName: string) {
    const dataSet = (await this.getDustInfo()).data.list;
    for (const i in dataSet) {
      if (dataSet[i].cityName === cityName) {
        const saveDustData = new DUST();
        saveDustData.cityName = dataSet[i].cityName;
        saveDustData.pm10Value = dataSet[i].pm10Value;
        saveDustData.pm25Value = dataSet[i].pm25Value;
        saveDustData.dataTime = dataSet[i].dataTime;
        return await this.dustRepository.save(saveDustData);
      }
    }
  }

}