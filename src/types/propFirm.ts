export interface PropFirm {
    id: number;
    name: string;
    logo: string;
    rating: number;
    reviewCount: number;
    favorite: boolean;
    country: string;
    yearsInOperation: number;
    assets: string[];
    platforms: string[];
    maxAllocation: string;
    promoDiscount: string;
    promoType: string;
    isFeatured?: boolean;
}