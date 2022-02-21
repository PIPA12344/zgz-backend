import {Controller, Get, Query} from '@nestjs/common';
import {DamService} from "./dam.service";
import shenLiuAnalysis from "./function/shenLiuAnalysis";
@Controller('dam')
export class DamController {
  constructor(private readonly damService: DamService) {}

  @Get('getredcountList')
  getRedCountList(): any {
    return this.damService.getRedCountList()
  }

  @Get('listByType')
  listByType(@Query() query): any {
    return this.damService.listByType(query.typecd)
  }

  @Get('upliftedPressure')
  upliftedPressure():any {
    return this.damService.upliftedPressure()
  }

  @Get('upliftedRelevance')
  upliftedRelevance(): any {
    return this.damService.upliftedRelevance()
  }

  @Get('waterWeekCharts')
  waterWeekCharts():any {
    return this.damService.waterWeekCharts()
  }

  @Get('waterMonthCharts')
  waterMonthCharts():any {
    return this.damService.waterMonthCharts()
  }

  @Get('waterCharacteristicValue')
  waterCharacteristicValue(): any {
    return this.damService.waterCharacteristicValue()
  }

  @Get('raoBaSeepPotential')
  raoBaSeepPotential(): any {
    return this.damService.raoBaSeepPotential()
  }

  @Get('raoBaSeepRelevance')
  raoBaSeepRelevance():any {
    return this.damService.raoBaSeepRelevance()
  }

  @Get('raoBaSeepHysteresis')
  raoBaSeepHysteresis():any {
    return this.damService.raoBaSeepHysteresis()
  }

  @Get('shenLiuAnalysis')
  shenLiuAnalysis(): any {
    return this.damService.shenLiuAnalysis()
  }

  @Get('shenLiuRelevance')
  shenLiuRelevance(): any {
    return this.damService.shenLiuRelevance()
  }

  @Get('ceFengStageRelevance')
  ceFengStageRelevance(): any {
    return this.damService.ceFengStageRelevance()
  }

  @Get('ceFengTemperatureRelevance')
  ceFengTemperatureRelevance(): any {
    return this.damService.ceFengTemperatureRelevance()
  }

  @Get('yingBianStageRelevance')
  yingBianStageRelevance(): any {
    return this.damService.yingBianStageRelevance()
  }

  @Get('yingBianTemperatureRelevance')
  yingBianTemperatureRelevance(): any {
    return this.damService.yingBianTemperatureRelevance()
  }
}
