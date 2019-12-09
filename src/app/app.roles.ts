export const ROLES = {
    distributor: ['distributor_content'],
    fabricator: ['fabricator_content']
};

export const ROLES_ACL = {
    '1': { role: 'distributor', app: 'app/app', admin: 'admin'},
    '3': { role: 'fabricator', app: 'app/factory', admin: 'admin'},
    '2': { role: 'distributor', app: 'app/app', admin: 'admin'}
};
