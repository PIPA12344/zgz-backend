import {Injectable} from '@nestjs/common';
import listByType from "./function/listByType";
import upliftedPressure from "./function/upliftedPressure";
import upliftedRelevance from "./function/upliftedRelevance";
import waterWeekCharts from "./function/waterWeekCharts";
import waterMonthCharts from "./function/waterMonthCharts";
import waterCharacteristicValue from "./function/waterCharacteristicValue";
import raoBaSeepPotential from "./function/raoBaSeepPotential";
import raoBaSeepRelevance from "./function/raoBaSeepRelevance";
import raoBaSeepHysteresis from "./function/raoBaSeepHysteresis";
import shenLiuAnalysis from "./function/shenLiuAnalysis";
import shenLiuRelevance from "./function/shenLiuRelevance";
import ceFengStageRelevance from "./function/ceFengStageRelevance";
import ceFengTemperatureRelevance from "./function/ceFengTemperatureRelevance";
import yingBianStageRelevance from "./function/yingBianStageRelevance";
import yingBianTemperatureRelevance from "./function/yingBianTemperatureRelevance";
import getRedCountList from "./function/getRedCountList";
@Injectable()
export class DamService {
  getRedCountList(): any {
    return getRedCountList()
  }
  listByType(type):any {
    return listByType(type)
  }
  upliftedPressure(): any {
    return upliftedPressure()
  }
  upliftedRelevance(): any {
    return upliftedRelevance()
  }
  waterWeekCharts(): any {
    return waterWeekCharts()
  }
  waterMonthCharts(): any {
    return waterMonthCharts()
  }
  waterCharacteristicValue(): any {
    return waterCharacteristicValue()
  }
  raoBaSeepPotential():any {
    return raoBaSeepPotential()
  }
  raoBaSeepRelevance():any {
    return raoBaSeepRelevance()
  }
  raoBaSeepHysteresis(): any {
    return raoBaSeepHysteresis()
  }
  shenLiuAnalysis(): any {
    return shenLiuAnalysis()
  }
  shenLiuRelevance(): any {
    return shenLiuRelevance()
  }
  ceFengStageRelevance(): any {
    return ceFengStageRelevance()
  }
  ceFengTemperatureRelevance(): any {
    return ceFengTemperatureRelevance()
  }
  yingBianStageRelevance(): any {
    return yingBianStageRelevance()
  }
  yingBianTemperatureRelevance(): any {
    return yingBianTemperatureRelevance()
  }
}
