import { ReportType } from "src/app/modules/admin/models/report-type.model";

export const masks = {
    CPF: '999.999.999-99',
    CNPJ: '99.999.999/9999-99',
    PHONE_D: '(99) 9 9999-9999',
    PHONE: '(99) 9999-9999'

};

export const brands_images = [
    3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 30, 31, 32, 34, 35, 36, 37
];

// export const notifierDefaultOptions: NotifierOptions = {
//     position: {
//         horizontal: {
//             position: 'right',
//             distance: 12
//         },
//         vertical: {
//             position: 'top',
//             distance: 12,
//             gap: 10
//         }
//     },
//     theme: 'material',
//     behaviour: {
//         autoHide: 5000,
//         onClick: false,
//         onMouseover: 'pauseAutoHide',
//         showDismissButton: true,
//         stacking: 4
//     },
//     animations: {
//         enabled: true,
//         show: {
//             preset: 'slide',
//             speed: 300,
//             easing: 'ease'
//         },
//         hide: {
//             preset: 'fade',
//             speed: 300,
//             easing: 'ease',
//             offset: 50
//         },
//         shift: {
//             speed: 300,
//             easing: 'ease'
//         },
//         overlap: 150
//     }
// };

export const TYPES: ReportType[] = [
    { typeBr: 'vendas', active: false, label: 'Relatório de Vendas', type: 'sales', icon: 'assets/icons/sale.svg' },
    { typeBr: 'abastecimentos', active: false, label: 'Relatório de Abastecimento', type: 'supplies', icon: 'assets/icons/suply.svg' },
    { typeBr: 'retornos', active: false, label: 'Relatório de Devoluções', type: 'returns', icon: 'assets/icons/return.svg' }
];
