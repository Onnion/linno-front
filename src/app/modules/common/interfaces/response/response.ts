
export interface Paginator {
    readonly total: number;
    readonly count: number;
    readonly per_page: number;
    readonly current_page: number;
    readonly total_pages: number;
}

export interface Response<T> {
    readonly data: ((T | T[]) & { error: boolean });
    readonly meta?: {
        pagination: Paginator;
    };
}