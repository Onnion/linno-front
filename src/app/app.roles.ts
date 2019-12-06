export const ROLES = {
    distributor: ['distributor_content'],
    fabricator: ['fabricator_content']
};

export const ROLES_ACL = {
    '1': { role: 'distributor', path: 'app/app' },
    '3': { role: 'fabricator', path: 'app/factory' },
    '2': { role: 'distributor', path: 'app/app' }
};
