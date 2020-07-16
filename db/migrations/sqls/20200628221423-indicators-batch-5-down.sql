UPDATE visualizations SET query = query || jsonb '{ "unit_measure": "PT" }';
INSERT INTO visualizations VALUES(3, 'total-years', '{ "unit_measure": "YR", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB, 'sex');
UPDATE indicator_visualizations SET visualization_id = 1 WHERE visualization_id = 3;

ALTER TABLE indicators DROP COLUMN uis_unit_measure;

DELETE FROM indicator_topics WHERE indicator_id = 22; 
DELETE FROM indicator_education_levels WHERE indicator_id = 22;
DELETE FROM indicator_pec_goals WHERE indicator_id = 22;
DELETE FROM indicator_ods4_goals WHERE indicator_id = 22;
DELETE FROM indicator_visualizations WHERE indicator_id = 22; 
DELETE FROM indicator_variations WHERE indicator_id = 22; 
DELETE FROM indicator_indexes WHERE indicator_id = 22;
DELETE FROM indicators WHERE id = 22;

DELETE FROM indicator_topics WHERE indicator_id = 23; 
DELETE FROM indicator_education_levels WHERE indicator_id = 23;
DELETE FROM indicator_pec_goals WHERE indicator_id = 23;
DELETE FROM indicator_ods4_goals WHERE indicator_id = 23;
DELETE FROM indicator_visualizations WHERE indicator_id = 23; 
DELETE FROM indicator_variations WHERE indicator_id = 23; 
DELETE FROM indicator_indexes WHERE indicator_id = 23;
DELETE FROM indicators WHERE id = 23;

DELETE FROM indicator_topics WHERE indicator_id = 26; 
DELETE FROM indicator_education_levels WHERE indicator_id = 26;
DELETE FROM indicator_pec_goals WHERE indicator_id = 26;
DELETE FROM indicator_ods4_goals WHERE indicator_id = 26;
DELETE FROM indicator_visualizations WHERE indicator_id = 26; 
DELETE FROM indicator_variations WHERE indicator_id = 26; 
DELETE FROM indicator_indexes WHERE indicator_id = 26;
DELETE FROM indicators WHERE id = 26;

DROP TABLE edu_finance;