-- fix indicator 22 - stat_unit EDU_EXP -> XUNIT
UPDATE indicators 
SET translation_key = 'XUNIT.USD.L02+L1+L2_3+L5T8', 
query = '{ "stat_unit": "XUNIT", "unit_measure": "PPP_CONST" }'::JSONB,
uis_data_query = 'XUNIT.PPP_CONST.L02+L1+L2_3+L5T8._T._T._T.GOV._T._Z._Z'
WHERE id = 22;

-- fix indicator 23 - unit PER -> PT
UPDATE indicators 
SET translation_key = 'TRTEACH.PT', 
query = '{ "stat_unit": "TRTEACH", "unit_measure": "PT" }'::JSONB,
uis_data_query = 'TRTEACH.PT.L02+L1+L2+L3+L2_3._T+C4.M+F+_T._T._T.INST_T._T._Z._T._T._T._T._Z._Z._T._T.W00.W00._Z',
uis_unit_measure = 'PT'
WHERE id = 23;

-- add indicator 18
INSERT INTO indicators VALUES
(18, 'NER.L5T8', '{ "stat_unit": "NER", "edu_level": "L5T8" }'::JSONB, 18, 'SDG4_MANUAL', '', null, 'PT');

INSERT INTO indicator_topics VALUES
(18, 1);

INSERT INTO indicator_education_levels VALUES
(18, 5);

INSERT INTO indicator_pec_goals VALUES
(18, 3);

INSERT INTO indicator_ods4_goals VALUES
(18, 2);

INSERT INTO indicator_visualizations VALUES
(18, 1),
(18, 2),
(18, 4),
(18, 5);

INSERT INTO indicator_indexes VALUES
(18, 1),
(18, 2),
(18, 3);

-- add indicator 24
INSERT INTO indicators VALUES
(24, 'TEACHER_SALARY', '{ "stat_unit": "TSP" }'::JSONB, 24, 'SDG4_MANUAL', '', null, 'PT');

INSERT INTO indicator_topics VALUES
(24, 5);

INSERT INTO indicator_education_levels VALUES
(24, 6);

INSERT INTO indicator_pec_goals VALUES
(24, 7);

INSERT INTO indicator_ods4_goals VALUES
(24, 5),
(24, 10);

INSERT INTO indicator_visualizations VALUES
(24, 1),
(24, 2),
(24, 4),
(24, 5);

INSERT INTO indicator_indexes VALUES
(24, 1),
(24, 2),
(24, 3);

UPDATE visualizations
SET code = 'wealth-quintile'
WHERE id = 4;

-- add new table for manual data
CREATE TABLE sdg4_manual (
    stat_unit VARCHAR(25),
    unit_measure VARCHAR(8),
    edu_level VARCHAR(8),
    sex VARCHAR(8),
    age VARCHAR(16),
    grade VARCHAR(8),
    edu_attain VARCHAR(8),
    subject VARCHAR(8),
    wealth_quintile VARCHAR(8),
    infrastr VARCHAR(8),
    location VARCHAR(8),
    ref_area VARCHAR(8),
    time_period SMALLINT,
    obs_value NUMERIC(8,5),
    unit_mult SMALLINT,
    obs_status VARCHAR(8),
    freq VARCHAR(8),
    decimals SMALLINT
);