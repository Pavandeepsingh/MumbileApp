import { MobileRepairFee } from './../../models/mobileRepairFee';

import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class MobileRepairFeesProvider {
  MobileRepairFees: MobileRepairFee[] = [];
  constructor() { 
  }
}
