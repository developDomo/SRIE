CREATE TABLE edu_finance (
    dataflow VARCHAR(32),
    stat_unit VARCHAR(25),
    unit_measure VARCHAR(16),
    edu_level VARCHAR(8),
    edu_cat VARCHAR(8),
    edu_attain VARCHAR(8) DEFAULT '_Z',
    sex VARCHAR(8) DEFAULT '_T',
    wealth_quintile VARCHAR(8) DEFAULT '_Z',
    location VARCHAR(8) DEFAULT '_Z',
    subject VARCHAR(8) DEFAULT '_Z',
    grade VARCHAR(8) DEFAULT '_Z',
    age VARCHAR(8) DEFAULT '_Z',
    infrastr VARCHAR(8) DEFAULT '_Z',
    sector_edu VARCHAR(8),
    expenditure_type VARCHAR(16),
    source_fund VARCHAR(16),
    fund_flow VARCHAR(8),
    teach_experience VARCHAR(16),
    contract_type VARCHAR(16),
    ref_area VARCHAR(8),
    time_period SMALLINT,
    obs_value NUMERIC(10,5),
    unit_mult SMALLINT,
    obs_status VARCHAR(8),
    freq VARCHAR(8),
    decimals SMALLINT
);

ALTER TABLE edu_non_finance ALTER COLUMN obs_value TYPE NUMERIC(10,5);

-- 22. EDU_EXP.PPP_CONST.L02+L1+L2_3+L5T8
INSERT INTO indicators VALUES
(22, 'EDU_EXP.USD.L02+L1+L2_3+L5T8', '{ "stat_unit": "EDU_EXP", "unit_measure": "PPP_CONST" }'::JSONB, 22, 'EDU_FINANCE', 'EDU_EXP.PPP_CONST.L02+L1+L2_3+L5T8._T._T._T.GOV._T._Z._Z');

INSERT INTO indicator_topics VALUES
(22, 6);

INSERT INTO indicator_education_levels VALUES
(22, 1),
(22, 3),
(22, 4),
(22, 5),
(22, 6);

INSERT INTO indicator_pec_goals VALUES
(22, 6);

INSERT INTO indicator_ods4_goals VALUES
(22, 5),
(22, 9);

INSERT INTO indicator_visualizations VALUES
(22, 1);

INSERT INTO indicator_variations VALUES
(22, '22-a', '{ "edu_level": "L02" }'::JSONB, 'a'),
(22, '22-b', '{ "edu_level": "L1" }'::JSONB, 'b'),
(22, '22-c', '{ "edu_level": "L2_3" }'::JSONB, 'c'),
(22, '22-d', '{ "edu_level": "L5T8" }'::JSONB, 'd');

-- 23. TRTEACH.PER
INSERT INTO indicators VALUES
(23, 'TRTEACH.PER', '{ "stat_unit": "TRTEACH", "unit_measure": "PER" }'::JSONB, 23, 'EDU_NON_FINANCE', 'TRTEACH.PER.L02+L1+L2+L3+L2_3._T+C4.M+F+_T._T._T.INST_T._T._Z._T._T._T._T._Z._Z._T._T.W00.W00._Z');

INSERT INTO indicator_topics VALUES
(23, 5);

INSERT INTO indicator_education_levels VALUES
(23, 2),
(23, 3),
(23, 4),
(23, 6);

INSERT INTO indicator_pec_goals VALUES
(23, 7);

INSERT INTO indicator_ods4_goals VALUES
(23, 5),
(23, 10);

INSERT INTO indicator_visualizations VALUES
(23, 1),
(23, 2);

INSERT INTO indicator_variations VALUES
(23, '23-a', '{ "edu_level": "L02" }'::JSONB, 'a'),
(23, '23-b', '{ "edu_level": "L1" }'::JSONB, 'b'),
(23, '23-c', '{ "edu_level": "L2" }'::JSONB, 'c'),
(23, '23-d', '{ "edu_level": "L3" }'::JSONB, 'd'),
(23, '23-e', '{ "edu_level": "L2_3" }'::JSONB, 'e');

-- 26. SCH.L1
INSERT INTO indicators VALUES
(26, 'SCH.L1', '{ "stat_unit": "SCH", "edu_level": "L1" }'::JSONB, 26, 'SDG4', 'SCH.PT.L1._T._T._T._T.INST_T._Z._T._Z.ELEC+NET_PP+COMP_PP+IMPR_DWATER_AVAIL+IMPR_SSEX_USE_TOILET+HWASH._T._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(26, 5);

INSERT INTO indicator_education_levels VALUES
(26, 6);

INSERT INTO indicator_ods4_goals VALUES
(26, 8);

INSERT INTO indicator_visualizations VALUES
(26, 1);

INSERT INTO indicator_variations VALUES
(26, '26-a', '{ "infrastr": "ELEC" }'::JSONB, 'a'),
(26, '26-b', '{ "infrastr": "NET_PP" }'::JSONB, 'b'),
(26, '26-c', '{ "infrastr": "COMP_PP" }'::JSONB, 'c'),
(26, '26-d', '{ "infrastr": "IMPR_DWATER_AVAIL" }'::JSONB, 'd'),
(26, '26-e', '{ "infrastr": "IMPR_SSEX_USE_TOILET" }'::JSONB, 'e'),
(26, '26-f', '{ "infrastr": "HWASH" }'::JSONB, 'f');

ALTER TABLE indicators ADD COLUMN uis_unit_measure VARCHAR(16);
UPDATE indicators SET uis_unit_measure = 'PT' WHERE id IN (1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20, 26);
UPDATE indicators SET uis_unit_measure = 'YR' WHERE id IN (5, 15);
UPDATE indicators SET uis_unit_measure = 'PPP_CONST' WHERE id = 22;
UPDATE indicators SET uis_unit_measure = 'PER' WHERE id = 23;

UPDATE indicator_visualizations SET visualization_id = 1 WHERE visualization_id = 3;
DELETE FROM visualizations WHERE id = 3;

UPDATE visualizations SET query = query - 'unit_measure';

ALTER TABLE sdg4 ALTER COLUMN infrastr TYPE VARCHAR(32);