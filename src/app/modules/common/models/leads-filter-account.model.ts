export interface MinFilterAccountType {
    readonly name: string;
    readonly picture: string;
    readonly id: (number | string);
}

export interface LeadsFilterAccountType extends MinFilterAccountType {
    readonly description?: string;
    readonly mailings?: string[];
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly status_call?: boolean;
}
