import { MobileRepairFee } from './../models/mobileRepairFee';
import { Mobile } from './../models/mobile';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from "rxjs/Observable";
import { URLConstants } from './constants';


@Injectable()
export class MobileService {

    constructor(private baseService: BaseService, private constants: URLConstants) { }

    getMobiles(brandId: number): Observable<Mobile[]> {
        debugger
        let urlMobile = this.constants.URLs.GETMOBILES;
        return this.baseService.getData(urlMobile, {}).map(response => {
            debugger;
            return response.map(item => ({ MobileName: item.name, MobileId: 1 }));
        });
    };

    getMobileRepairFees(mobileId: number): Observable<MobileRepairFee[]> {
        debugger
        let urlMobile = this.constants.URLs.GETMOBILES;
        return this.baseService.getData(urlMobile, {}).map(response => {
            response = this.getMockDataForRepairFee()
            return response.map(item =>
                <MobileRepairFee>{
                    MobileRepairFeeId: item.MobileRepairFeeId,
                    MobileId: item.MobileId,
                    BrandId: item.BrandId,
                    Amount: item.Amount,
                    BrandName: item.BrandName,
                    MobileName: item.MobileName,
                    MobileFaultId: item.MobileFaultId,
                    MobileFaultName: item.MobileFaultName,
                    IsActive: false
                }
            );
        });
    }

    getMockDataForRepairFee(): MobileRepairFee[] {
        let mobileRepairFeeList: MobileRepairFee[] = [];
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 1,
                MobileId: 1,
                BrandId: 12,
                Amount: 100,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Battery',
                IsActive: false
            }
        )
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 2,
                MobileId: 1,
                BrandId: 12,
                Amount: 400,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Microphone',
                IsActive: false
            }
        )
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 3,
                MobileId: 1,
                BrandId: 12,
                Amount: 35,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Earpiece',
                IsActive: false
            }
        )
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 4,
                MobileId: 1,
                BrandId: 12,
                Amount: 35,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Charging',
                IsActive: false
            }
        )
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 5,
                MobileId: 1,
                BrandId: 12,
                Amount: 37,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Display',
                IsActive: false
            }
        )
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 6,
                MobileId: 1,
                BrandId: 12,
                Amount: 45,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Keypad',
                IsActive: false
            }
        )
        mobileRepairFeeList.push(
            {
                MobileRepairFeeId: 7,
                MobileId: 1,
                BrandId: 12,
                Amount: 140,
                BrandName: 'Nokia',
                MobileName: 'Nokia 6',
                MobileFaultId: 1,
                MobileFaultName: 'Water Damage',
                IsActive: false
            }
        )

        return mobileRepairFeeList;
    }
}