ALTER TABLE users ADD COLUMN first_name VARCHAR(125);
ALTER TABLE users ADD COLUMN last_name VARCHAR(125);

UPDATE users 
SET first_name = 'Admin',
    last_name = 'El Domo'
WHERE email = 'dev@eldomo.net';

UPDATE users 
SET first_name = 'Costa Rica',
    last_name = 'El Domo'
WHERE email = 'country@eldomo.net';