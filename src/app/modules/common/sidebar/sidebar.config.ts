import { ROLES } from '../../../app.roles';

export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    disabled?: boolean;
    collapse?: string;
    permission: string;
    children?: ChildrenItems[];
}
export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/painel',
        title: 'Painel de resultados',
        type: 'link',
        icontype: 'assessment',
        permission: ROLES.distributor[0]
    },
    {
        path: '/revenda',
        title: 'Painel de resultados',
        type: 'link',
        icontype: 'assessment',
        permission: ROLES.client[0]
    },
    {
        path: '/cadastro',
        title: 'Cadastrar revenda',
        type: 'link',
        icontype: 'assignment',
        permission: ROLES.distributor[0]
    },
    {
        path: '/ajuste​',
        title: 'Atualização do cadastro',
        type: 'link',
        icontype: 'assignment_late',
        permission: ROLES.distributor[0]
    },
];
