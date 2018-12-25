import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Brand } from './../models/brand';
import { Observable } from "rxjs/Observable";
import { URLConstants } from './constants';

@Injectable()
export class BrandServices {

    constructor(private baseService: BaseService, private constants: URLConstants) { }

    getBrands(): Observable<Brand[]> {
        debugger
        let urlBrands = this.constants.URLs.GETBRANDS;
        return this.baseService.getData(urlBrands, {}).map(response => {
            debugger;
            return response.map(item => ({ BrandName: item.name, BrandId: 1 }));
        });
    };
}