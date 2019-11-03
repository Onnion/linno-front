export interface ReportType {
    active: boolean;
    readonly label: string;
    readonly type: 'sales' | 'supplies' | 'returns';
    readonly typeBr: 'vendas' | 'abastecimentos' | 'retornos';
    readonly icon: string;
}
