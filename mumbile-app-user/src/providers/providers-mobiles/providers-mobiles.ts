import {AutoCompleteService} from 'ionic2-auto-complete';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProvidersMobilesProvider {

  labelAttribute = "name";

  constructor(private http:HttpClient) {}
  getResults(keyword:string) {
    console.log('get Result for auto complete');
   return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
      .map(
        result =>
        {  
          return result.filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()))
        });
    }
  
}
