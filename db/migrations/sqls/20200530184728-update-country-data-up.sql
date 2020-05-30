ALTER TABLE countries ADD COLUMN short_name VARCHAR(50) UNIQUE;
ALTER TABLE countries DROP COLUMN flag;
ALTER TABLE countries DROP COLUMN name;

UPDATE countries SET short_name = 'belice' where code = 'BZ';
UPDATE countries SET short_name = 'costa-rica' where code = 'CR';
UPDATE countries SET short_name = 'el-salvador' where code = 'SV';
UPDATE countries SET short_name = 'guatemala' where code = 'GT';
UPDATE countries SET short_name = 'honduras' where code = 'HN';
UPDATE countries SET short_name = 'nicaragua' where code = 'NI';
UPDATE countries SET short_name = 'panama' where code = 'PA';
UPDATE countries SET short_name = 'republica-dominicana' where code = 'DO';