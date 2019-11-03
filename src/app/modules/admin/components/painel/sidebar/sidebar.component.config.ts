export const ROUTES = [
    {
        path: '/painel',
        title: 'Painel de Controle',
        icon: 'bar_chart',
        material: true,
        root: 'painel',
        permission: 'manage_content'
    },

    {
        path: 'perfil',
        title: 'Perfil',
        icon: 'ni ni-single-02',
        permission: 'manage_content',
        material: false,
        root: 'painel/perfil'
    },

    {
        path: 'espacos',
        title: 'Espaços',
        icon: 'dashboard',
        permission: 'manage_content',
        material: true,
        root: 'painel/espacos'
    },

    {
        path: 'fornecedores',
        material: true,
        id: 'fornecedores',
        title: 'Fornecedores',
        icon: 'people',
        root: 'painel/fornecedores',
        permission: 'manage_content'
    },

    {
        path: 'vendas',
        title: 'Vendas',
        icon: 'shopping_cart',
        permission: 'manage_content',
        material: true,
        root: 'painel/vendas'
    },

    {
        path: 'relatorios',
        title: 'Relatórios',
        icon: 'insert_drive_file',
        permission: 'manage_content',
        material: true,
        root: 'painel/relatorios'
    },


    // SELLER
    {
        path: '/vendedor',
        title: 'Suas Vendas',
        icon: 'shopping_cart',
        permission: 'seller_content',
        material: true,
        root: 'vendedor'
    },

    {
        path: 'vendas/adicionar',
        title: 'Nota',
        icon: 'receipt',
        permission: 'seller_content',
        material: true,
        root: 'vendedor/vendas/adicionar'
    },


    // PURVEYOR
    {
        path: '/fornecedor',
        title: 'Painel de Controle',
        icon: 'bar_chart',
        permission: 'purveyor_content',
        material: true,
        root: 'fornecedor'
    },

    {
        path: 'vendas',
        title: 'Minhas Vendas',
        icon: 'shopping_cart',
        permission: 'purveyor_content',
        material: true,
        root: 'fornecedor/vendas'
    },

    {
        path: 'perfil',
        title: 'Meu Perfil',
        icon: 'ni ni-single-02',
        permission: 'purveyor_content',
        material: false,
        root: 'fornecedor/perfil'
    },

    {
        path: 'espacos',
        title: 'Meus Espaços',
        icon: 'dashboard',
        permission: 'purveyor_content',
        material: true,
        root: 'fornecedor/espacos'
    }

];
