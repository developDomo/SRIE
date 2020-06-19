--topics
ALTER TABLE topics RENAME COLUMN translation_key TO code;
INSERT INTO topics VALUES
(1, 'participation'),
(2, 'offering'),
(3, 'learning-and-skills'),
(4, 'completion'),
(5, 'educational-environment'),
(6, 'cross-cutting-goals');

-- educational_levels
ALTER TABLE educational_levels RENAME TO education_levels;
INSERT INTO education_levels VALUES
(1, 'L01'),  -- early childhood
(2, 'L02'),  -- pre-primary
(3, 'L1'),   -- primary
(4, 'L2_3'), -- secondary
(5, 'L5T8'), -- terciary
(6, 'L');    -- general

ALTER TABLE indicator_educational_levels RENAME TO indicator_education_levels;
ALTER TABLE indicator_education_levels RENAME COLUMN educational_level_id TO education_level_id;

-- pec_goals
INSERT INTO pec_goals VALUES
(1, '2.2', '2-2', 1),
(2, '3.1', '3-1', 2),
(3, '3.2', '3-2', 3),
(4, '3.3', '3-3', 4),
(5, '3.4', '3-4', 5),
(6, '4.1', '4-1', 6),
(7, '5.1', '5-1', 7),
(8, '6.1', '6-1', 8);

-- indexes
INSERT INTO indexes VALUES (1, 'GPIA', '{ "unit_measure": "GPIA", "sex": "_T", "location": "_T", "wealth_quintile": [ "_Z", "_T"] }'::JSONB);
INSERT INTO indexes VALUES (2, 'GLPIA', '{ "unit_measure": "GLPIA", "sex": "_T", "location": "_T", "wealth_quintile": [ "_Z", "_T"] }'::JSONB);
INSERT INTO indexes VALUES (3, 'SESPIA', '{ "unit_measure": "SESPIA", "sex": "_T", "location": "_T", "wealth_quintile": [ "_Z", "_T"] }'::JSONB);

-- -- visualizations
INSERT INTO visualizations VALUES(1, 'total', '{ "unit_measure": "PT", "sex": "_T", "location": "_T", "wealth_quintile": "_Z" }'::JSONB, 'sex', 'sexes');
INSERT INTO visualizations VALUES(2, 'sex', '{ "unit_measure": "PT", "sex": ["M", "F"], "location": "_T", "wealth_quintile": "_T" }'::JSONB, 'sex', 'sexes');

-- indicators
ALTER TABLE indicators ADD COLUMN uis_dataset VARCHAR(50);
ALTER TABLE indicators ADD COLUMN uis_data_query VARCHAR(250);

-- 1. CHILD_TRACK_T.Y_LT5
INSERT INTO indicators VALUES
(1, 'CHILD_TRACK_T.Y_LT5', '{ "stat_unit": "CHILD_TRACK_T", "age": "Y_LT5" }'::JSONB, 1, 'SDG4', 'CHILD_TRACK_T.PT+GPI+LPI+WPI._Z._Z._T.Y_LT5._Z._Z._Z._Z._Z._Z._T._Z._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(1, 3);

INSERT INTO indicator_education_levels VALUES
(1, 1);

INSERT INTO indicator_pec_goals VALUES
(1, 1),
(1, 2);

INSERT INTO indicator_visualizations VALUES
(1, 1),
(1, 2);

-- 2. NARA
INSERT INTO indicators VALUES
(2, 'NARA', '{ "stat_unit": "NARA" }'::JSONB, 2, 'EDU_NON_FINANCE', 'NARA.PT+GPIA.L1._T.F+M+_T.UNDER1_AGE._T.INST_T._Z._T._T._T._T._Z._Z._Z._Z._Z.W00.W00._Z');

INSERT INTO indicator_topics VALUES
(2, 1);

INSERT INTO indicator_education_levels VALUES
(2, 1);

INSERT INTO indicator_pec_goals VALUES
(2, 1),
(2, 2);

INSERT INTO indicator_visualizations VALUES
(2, 1),
(2, 2);