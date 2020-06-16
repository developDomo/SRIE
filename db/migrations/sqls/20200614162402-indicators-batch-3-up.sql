-- indexes
INSERT INTO indexes VALUES 
(7, 'IPIA', '{ "unit_measure": "IPI", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB);

-- visualizations
ALTER TABLE visualizations DROP COLUMN label_root;
INSERT INTO visualizations VALUES
(4, 'wealth-quintille', '{ "unit_measure": "PT", "sex": [ "_Z", "_T" ], "location": [ "_Z", "_T" ], "wealth_quintile": [ "Q1", "Q2", "Q3", "Q4", "Q5" ] }'::JSONB, 'sex'),
(5, 'location', '{ "unit_measure": "PT", "sex": [ "_Z", "_T" ], "location": [ "RUR", "URB" ], "wealth_quintile": [ "_Z", "_T" ] }'::JSONB, 'sex');

-- 7. STU.G2_3.L1+L2.READING+MATH
INSERT INTO indicators VALUES
(7, 'STU.GLAST.L1+L2.READING+MATH', '{ "stat_unit": "STU", "grade": "GLAST", "subject": [ "READING", "MATH" ] }'::JSONB, 7, 'SDG4', 'STU.PT+IPI+GPI+SESPI+GLPI.L1+L2._T.F+M+_T._T.GLAST.INST_T._Z.READING+MATH._Z._Z._T._T._T._Z._Z._T+_Z');

INSERT INTO indicator_topics VALUES
(7, 3);

INSERT INTO indicator_education_levels VALUES
(7, 3),
(7, 4);

INSERT INTO indicator_pec_goals VALUES
(7, 1),
(7, 2);

INSERT INTO indicator_visualizations VALUES
(7, 1),
(7, 2);

INSERT INTO indicator_indexes VALUES
(7, 1),
(7, 2),
(7, 3),
(7, 7);

INSERT INTO indicator_variations VALUES
(7, '7-a', '{ "edu_level": "L1", "subject": "READING" }'::JSONB, 'a'),
(7, '7-b', '{ "edu_level": "L1", "subject": "MATH" }'::JSONB, 'b'),
(7, '7-c', '{ "edu_level": "L2", "subject": "READING" }'::JSONB, 'c'),
(7, '7-d', '{ "edu_level": "L2", "subject": "MATH" }'::JSONB, 'd');

-- 8 NIR.TH_ENTRY_AGE.G1
INSERT INTO indicators VALUES
(8, 'NIR.TH_ENTRY_AGE.G1', '{ "stat_unit": "NIR", "age": "TH_ENTRY_AGE", "grade": "G1" }'::JSONB, 8, 'EDU_NON_FINANCE', 'NIR.PT.L1._T.F+M+_T.TH_ENTRY_AGE.G1.INST_T._Z._Z._T.INIT._T._Z._Z._Z._Z._Z.W00.W00._Z');

INSERT INTO indicator_topics VALUES
(8, 1);

INSERT INTO indicator_education_levels VALUES
(8, 3);

INSERT INTO indicator_pec_goals VALUES
(8, 1),
(8, 2);

INSERT INTO indicator_visualizations VALUES
(8, 1),
(8, 2);

-- 9. AIR.GLAST.L1+L2
INSERT INTO indicators VALUES
(9, 'AIR.GLAST.L1+L2', '{ "stat_unit": "AIR", "grade": "GLAST" }'::JSONB, 9, 'SDG4', 'AIR.PT+GPI.L1+L2._T+C4.F+M+_T._T.GLAST.INST_T._Z._T._Z._Z._T.INIT._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(9, 4);

INSERT INTO indicator_education_levels VALUES
(9, 3),
(9, 4);

INSERT INTO indicator_pec_goals VALUES
(9, 1),
(9, 2);

INSERT INTO indicator_visualizations VALUES
(9, 1),
(9, 2);

INSERT INTO indicator_indexes VALUES
(9, 1);

INSERT INTO indicator_variations VALUES
(9, '9-a', '{ "edu_level": "L1" }'::JSONB, 'a'),
(9, '9-b', '{ "edu_level": "L2" }'::JSONB, 'b');

-- 10. CR.GLAST 
INSERT INTO indicators VALUES
(10, 'CR.GLAST', '{ "stat_unit": "CR", "grade": "GLAST" }'::JSONB, 10, 'SDG4', 'CR.PT+GPIA+GLPIA+SESPIA.L1+L2+L3._T.F+M+_T._T.GLAST.INST_T._Z._T._T+Q1+Q2+Q3+Q4+Q5._Z._T+RUR+URB._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(10, 4);

INSERT INTO indicator_education_levels VALUES
(10, 3),
(10, 4);

INSERT INTO indicator_pec_goals VALUES
(10, 1),
(10, 2);

INSERT INTO indicator_visualizations VALUES
(10, 1),
(10, 2);

INSERT INTO indicator_indexes VALUES
(10, 4),
(10, 5),
(10, 6);

INSERT INTO indicator_variations VALUES
(10, '10-a', '{ "edu_level": "L1" }'::JSONB, 'a'),
(10, '10-b', '{ "edu_level": "L2" }'::JSONB, 'b'),
(10, '10-c', '{ "edu_level": "L3" }'::JSONB, 'c');