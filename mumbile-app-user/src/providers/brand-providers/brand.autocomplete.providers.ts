import { BrandServices } from './../../services/brand.service';
import { AutoCompleteService } from 'ionic2-auto-complete';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class BrandAutoCompleteProvider implements AutoCompleteService {

  labelAttribute = "BrandName";
  formValueAttribute = "";

  constructor(private brandService: BrandServices) { }

  getResults(keyword: string) {
    debugger;
    return this.brandService.getBrands().map(
      result => {
        return result.filter(item => item.BrandName.toLowerCase().startsWith(keyword.toLowerCase()))
      });
  }
}
