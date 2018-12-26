export interface MobileRepairFee {
    MobileRepairFeeId: number;
    MobileId: number;
    BrandId: number;
    Amount: number;
    BrandName: string;
    MobileName: string;
    MobileFaultId: number;
    MobileFaultName: string;
    IsActive?: boolean
}