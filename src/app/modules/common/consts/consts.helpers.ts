// import { NotifierOptions } from 'angular-notifier';


export const masks = {
    CPF: '999.999.999-99',
    CNPJ: '99.999.999/9999-99',
    PHONE_D: '(99) 9 9999-9999',
    PHONE: '(99) 9999-9999',
    KEY_ADWORD: '999-999-9999'
};

export const CARDS = [
    { chart: true, data: 'googleReports', observable: true, name: 'impressions', label: 'Leads Conquistados' },
    { data: 'googleReports', observable: true, name: 'clicks', label: 'Formulários' },
    { data: 'conversions', observable: true, name: 'total', label: 'Total de Ligações' },
    { data: 'conversions', observable: true, name: 'cpa', label: 'CPL GERAL', pipe: 'currency' }
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

export const CHART_COLORS = {
    'Chat': {
        to: 'rgba(255, 127, 0, 0.1)',
        from: 'rgba(255, 127, 0, .7)'
    },
    'Formulário': {
        to: 'rgba(255, 204, 0, 0.1)',
        from: 'rgba(255, 204, 0, .7)'
    },
    'Ligação': {
        to: 'rgba(255, 255, 255, 0.1)',
        from: 'rgba(255, 255, 255, .7)'
    },
    'Whatsapp': {
        to: 'rgba(37, 211, 102, 0.1)',
        from: 'rgba(37, 211, 102, .7)'
    }
};
