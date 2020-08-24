INSERT INTO indicator_variations VALUES
(5, '5-a', '{ "stat_unit": "FREE_EDU" }'::JSONB, 'a'),
(5, '5-b', '{ "stat_unit": "COMP_EDU" }'::JSONB, 'b');

UPDATE indicator_variations 
SET query = '{"edu_level": ["_Z", "L1T8"], "edu_attain": ["_Z", "L1T8"]}'::JSONB
WHERE indicator_id = 20 and code = 'a';

UPDATE indicator_variations 
SET query = '{"edu_level": ["_Z", "L5T8"], "edu_attain": ["_Z", "L5T8"]}'::JSONB
WHERE indicator_id = 20 and code = 'b';

UPDATE indicator_variations 
SET query = '{"edu_level": ["_Z", "L6T8"], "edu_attain": ["_Z", "L6T8"]}'::JSONB
WHERE indicator_id = 20 and code = 'c';

UPDATE indicator_variations 
SET query = '{"edu_level": ["_Z", "L7_8"], "edu_attain": ["_Z", "L7_8"]}'::JSONB
WHERE indicator_id = 20 and code = 'd';

UPDATE indicator_variations 
SET query = '{"edu_level": ["_Z", "L8"], "edu_attain": ["_Z", "L8"]}'::JSONB
WHERE indicator_id = 20 and code = 'e';