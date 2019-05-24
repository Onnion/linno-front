export const ROLES = {
    root: ['root_content'],
    client: ['client_content']
};

export const ROLES_ACL = {
    'distributor': { role: 'root', path: '' },
    'resale': { role: 'client', path: 'cliente' }
};
