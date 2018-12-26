import { Mobile } from './../../models/mobile';
import { AutoCompleteService } from 'ionic2-auto-complete';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class MobilesAutoCompleteProvider implements AutoCompleteService {

  labelAttribute = "MobileName";
  formValueAttribute = "";
  BrandId = 0;
  Mobiles: Mobile[] = [];

  constructor() { }

  getResults(keyword: string) {
    return this.Mobiles.filter(item => item.MobileName.toLowerCase().startsWith(keyword.toLowerCase()));
  }
}
