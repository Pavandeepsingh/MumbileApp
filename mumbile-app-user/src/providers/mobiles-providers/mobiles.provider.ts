import { URLConstants } from './../../services/constants';
import { BaseService } from './../../services/base.service';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class MobilesProvider {

  labelAttribute = "name";

  constructor(private baseService: BaseService, private constants: URLConstants) { }

  getMobiles(keyword: string) {
    return this.baseService.getData( this.constants.URLs.GETMOBILES + keyword, {})
      .subscribe(
        result => {
          return result.filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()))
        });
  }

}
