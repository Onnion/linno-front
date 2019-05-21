export interface LeadsFilterType {
    readonly name: string;
    readonly label: string;
    readonly icon: string;
    readonly activeColor: string;
    canRemove: boolean;
    active: boolean;
    clicked?: boolean;
}
