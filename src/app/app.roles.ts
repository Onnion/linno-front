export const ROLES = {
    admin: ['admin_content', 'distributor_content', 'set-bullet'],
    distributor: ['distributor_content', 'see-bullet'],
    client: ['client_content', 'see-bullet']
};

export const ROLES_ACL = {
    'distributor': { role: 'distributor', path: 'painel' },
    'resale': { role: 'client', path: 'revenda' },
    'admin': { role: 'admin', path: 'painel' }
};
