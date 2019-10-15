import { trigger, animate, style, group, query, stagger, transition, keyframes, state } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', top: '55px' })
            , { optional: true }),
        query('.block', style({ opacity: 0 }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ]),
        query(':enter .block', stagger(400, [
            style({ transform: 'translateY(0px)' }),
            animate('0.5s ease-in-out',
                style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);

export const detailExpand = trigger('detailExpand', [
    state('collapsed', style({ height: '0px', minHeight: '0', overflow: 'hidden', display: 'none' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('325ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);

export const showUp = trigger('showUp', [
    transition('void => *', [
        style({ transform: 'translateY(-20%)' }),
        animate(500, style({ transform: 'translateY(0)' }))
    ]),
    transition('* => void', [
        style({ transform: 'translateY(0)' }),
        animate(500, style({ transform: 'translateY(-20%)' }))
    ])
]);

export const slide = trigger('slide', [
    state('in', style({ transform: 'translateY(200px)' })),
    transition(':leave', [
        group([
            animate('600ms ease-in-out', style({ transform: 'translateY(200px)' }))
        ])

    ]),
    transition(':enter', [
        group([
            animate(0, style({ transform: 'translateY(0px)' })),
        ])

    ])
])