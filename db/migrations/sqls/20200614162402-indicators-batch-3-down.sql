DELETE FROM indicator_topics WHERE indicator_id = 7; 
DELETE FROM indicator_education_levels WHERE indicator_id = 7;
DELETE FROM indicator_pec_goals WHERE indicator_id = 7;
DELETE FROM indicator_pec_goals WHERE indicator_id = 7;
DELETE FROM indicator_visualizations WHERE indicator_id = 7; 
DELETE FROM indicator_variations WHERE indicator_id = 7; 
DELETE FROM indicator_indexes WHERE indicator_id = 7;
DELETE FROM indicators WHERE id = 7;

DELETE FROM indicator_topics WHERE indicator_id = 8; 
DELETE FROM indicator_education_levels WHERE indicator_id = 8;
DELETE FROM indicator_pec_goals WHERE indicator_id = 8;
DELETE FROM indicator_pec_goals WHERE indicator_id = 8;
DELETE FROM indicator_visualizations WHERE indicator_id = 8; 
DELETE FROM indicator_variations WHERE indicator_id = 8; 
DELETE FROM indicator_indexes WHERE indicator_id = 8;
DELETE FROM indicators WHERE id = 8;

DELETE FROM indicator_topics WHERE indicator_id = 9; 
DELETE FROM indicator_education_levels WHERE indicator_id = 9;
DELETE FROM indicator_pec_goals WHERE indicator_id = 9;
DELETE FROM indicator_pec_goals WHERE indicator_id = 9;
DELETE FROM indicator_visualizations WHERE indicator_id = 9; 
DELETE FROM indicator_variations WHERE indicator_id = 9; 
DELETE FROM indicator_indexes WHERE indicator_id = 9;
DELETE FROM indicators WHERE id = 9;

DELETE FROM indicator_topics WHERE indicator_id = 10; 
DELETE FROM indicator_education_levels WHERE indicator_id = 10;
DELETE FROM indicator_pec_goals WHERE indicator_id = 10;
DELETE FROM indicator_pec_goals WHERE indicator_id = 10;
DELETE FROM indicator_visualizations WHERE indicator_id = 10; 
DELETE FROM indicator_variations WHERE indicator_id = 10; 
DELETE FROM indicator_indexes WHERE indicator_id = 10;
DELETE FROM indicators WHERE id = 10;

DELETE FROM indexes WHERE id = 7;
DELETE FROM visualizations WHERE id = 4;
DELETE FROM visualizations WHERE id = 5;
ALTER TABLE visualizations ADD COLUMN label_root character varying(50);
UPDATE visualizations SET label_root = 'sexes';