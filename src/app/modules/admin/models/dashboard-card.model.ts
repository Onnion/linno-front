export interface DashBoardCard {
    readonly title: string;
    readonly content: string;
    readonly icon: string;
    readonly footer: string;
    readonly material: boolean;
    readonly price: boolean;
    readonly date?: boolean;
    readonly bg: string;
}
