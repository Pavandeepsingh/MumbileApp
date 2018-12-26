
import { Injectable } from '@angular/core';

@Injectable()
export class URLConstants {
  public URLs: any;
  private ApiURL: string;


  constructor() {

    this.ApiURL = "https://restcountries.eu";

    this.URLs = {
      GETBRANDS: this.ApiURL + '/rest/v1/name/a',
      GETMOBILES: this.ApiURL + '/rest/v1/name/a',
      GETMOBILEREPAIRFEES: this.ApiURL + '/rest/v1/name/a',
    };
  }
}
