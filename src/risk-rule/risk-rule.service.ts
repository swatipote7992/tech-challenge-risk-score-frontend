import { Injectable } from '@nestjs/common';
import Rule from "../types/rules";
import fetchData from 'src/utils/fetchdata';

@Injectable()
export class RiskRuleService {
    getRiskRules(): Promise<Rule[]> {    
        // Call our risk service API to get the risk rules
        return fetchData('rule', undefined)
    }
}