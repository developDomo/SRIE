-- visualizations
UPDATE visualizations 
SET query = '{ "unit_measure": "PT", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB
WHERE id = 1;

UPDATE visualizations 
SET query = '{ "unit_measure": "PT", "sex": ["M", "F"], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB 
WHERE id = 2;

INSERT INTO visualizations VALUES(3, 'total-years', '{ "unit_measure": "YR", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB, 'sex', 'sexes');

-- indexes
DELETE FROM indexes;
INSERT INTO indexes VALUES 
(1, 'GPI', '{ "unit_measure": "GPI", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB),
(2, 'GLPI', '{ "unit_measure": "GLPI", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB),
(3, 'SESPI', '{ "unit_measure": "SESPI", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB),
(4, 'GPIA', '{ "unit_measure": "GPIA", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB),
(5, 'GLPIA', '{ "unit_measure": "GLPIA", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB),
(6, 'SESPIA', '{ "unit_measure": "SESPIA", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB);

-- 3. NER
-- NO DATA

-- 4. NER.L02
INSERT INTO indicators VALUES
(4, 'NER.L02', '{ "stat_unit": "NER", "edu_level": "L02" }'::JSONB, 4, 'EDU_NON_FINANCE', 'NER.PT+GPI.L02._T.F+M+_T.SCH_AGE_GROUP._T.INST_T._Z._Z._T._T._T._Z._Z._Z._Z._Z.W00.W00._Z');

INSERT INTO indicator_topics VALUES
(4, 1);

INSERT INTO indicator_education_levels VALUES
(4, 2);

INSERT INTO indicator_pec_goals VALUES
(4, 1),
(4, 2);

INSERT INTO indicator_visualizations VALUES
(4, 1),
(4, 2);

INSERT INTO indicator_indexes VALUES
(4, 1);

-- 5. COMP_EDU+FREE_EDU.L02
INSERT INTO indicators VALUES
(5, 'COMP_EDU+FREE_EDU.L02', '{ "stat_unit": ["COMP_EDU", "FREE_EDU"], "edu_level": "L02" }'::JSONB, 5, 'SDG4', 'COMP_EDU+FREE_EDU.YR.L02._T._T._T._T.INST_T._Z._T._Z._Z._T._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(5, 2);

INSERT INTO indicator_education_levels VALUES
(5, 2);

INSERT INTO indicator_pec_goals VALUES
(5, 1),
(5, 2);

INSERT INTO indicator_visualizations VALUES
(5, 3);

-- 6. STU.G2_3.F+M+_T.READING+MATH
INSERT INTO indicators VALUES
(6, 'STU.G2_3.F+M+_T.READING+MATH', '{ "stat_unit": "STU", "grade": "G2_3", "subject": [ "READING", "MATH" ] }'::JSONB, 6, 'SDG4', 'STU.PT+SESPI+GPI+GLPI.L1._T.F+M+_T._T.G2_3.INST_T._Z.READING+MATH._Z._Z._T._T._T._Z._Z._T+_Z');

INSERT INTO indicator_topics VALUES
(6, 3);

INSERT INTO indicator_education_levels VALUES
(6, 3);

INSERT INTO indicator_pec_goals VALUES
(6, 1),
(6, 2);

INSERT INTO indicator_visualizations VALUES
(6, 1),
(6, 2);

INSERT INTO indicator_indexes VALUES
(6, 1),
(6, 2),
(6, 3);

INSERT INTO indicator_variations VALUES
(6, '6-a', '{ "subject": "READING" }'::JSONB, 'a'),
(6, '6-b', '{ "subject": "MATH" }'::JSONB, 'b');