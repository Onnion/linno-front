interface Niche {
    readonly description: string;
    readonly id: number;
}

interface Brand {
    readonly id: number;
    readonly name: string;
}

interface Franchise {
    readonly description: string;
    readonly id: number;
}

interface User {
    readonly id: number;
    readonly name: string;
}

export interface Contract {
    readonly begin_contract: string;
    readonly brand: Brand;
    readonly created_at: string;
    readonly end_contract: string;
    readonly franchise: Franchise;
    readonly id: number;
    readonly niche: Niche;
    readonly sales: number;
    readonly status: number;
    readonly updated_at: string;
    readonly user: User;
    readonly value: string;
}
