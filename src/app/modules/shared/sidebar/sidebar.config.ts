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
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        disabled: true,
        icontype: 'assessment',
        permission: ROLES.root[0]
    },
    {
        path: '/cliente',
        title: 'Dashboard',
        type: 'link',
        icontype: 'assessment',
        permission: ROLES.client[0]
    },
    {
        path: '/dashboard/revenda/adicionar',
        title: 'Cadastro',
        type: 'link',
        icontype: 'assignment',
        permission: ROLES.root[0]
    },
    {
        path: '/dashboard/revenda/editar',
        title: 'Atualização do cadastro',
        type: 'link',
        icontype: 'assignment_late',
        permission: ROLES.root[0]
    },
];
