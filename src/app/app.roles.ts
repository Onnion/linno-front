export const ROLES = {
    admin: ['distributor_content', 'set-bullet'],
    distributor: ['distributor_content', 'see-bullet'],
    client: ['client_content', 'see-bullet']
};

export const ROLES_ACL = {
    'distributor': { role: 'distributor', path: 'cadastro' },
    'resale': { role: 'client', path: 'revenda' },
    'admin': { role: 'admin', path: 'cadastro' }
};
