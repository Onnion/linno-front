export interface Token {
    readonly errorw: string;
    readonly error_description?: string;
    readonly message?: string;
    readonly access_token?: string;
    readonly expires_in?: number;
    readonly refresh_token?: string;
    readonly token_type?: string;
}