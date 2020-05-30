ALTER TABLE countries DROP COLUMN short_name;
ALTER TABLE countries DROP COLUMN flag VARCHAR(64);
ALTER TABLE countries DROP COLUMN name VARCHAR(64);

UPDATE countries SET name = 'Belice', flag = 'bandera-belice.png' where code = 'BZ';
UPDATE countries SET name = 'Costa Rica', flag = 'bandera-costa_rica.png' where code = 'CR';
UPDATE countries SET name = 'El Salvador', flag = 'bandera-el_salvador.png' where code = 'SV';
UPDATE countries SET name = 'Guatemala', flag = 'bandera-guatemala.png' where code = 'GT';
UPDATE countries SET name = 'Honduras', flag = 'bandera-honduras.png' where code = 'HN';
UPDATE countries SET name = 'Nicaragua', flag = 'bandera-nicaragua.png' where code = 'NI';
UPDATE countries SET name = 'Panamá', flag = 'bandera-panama.png' where code = 'PA';
UPDATE countries SET name = 'República Dominicana', flag = 'bandera-rep_dominicana.png' where code = 'DO';