export interface User {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly type: string;
    readonly user: {
        name: string,
        email: string,
        status: string
    }
}
