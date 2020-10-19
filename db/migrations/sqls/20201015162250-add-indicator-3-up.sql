-- add indicator 3
INSERT INTO indicators VALUES
(3, 'NER3.L0', '{ "stat_unit": "NER3", "edu_level": "L0" }'::JSONB, 3, 'SDG4_MANUAL', '', null, 'PT');

INSERT INTO indicator_topics VALUES
(3, 1);

INSERT INTO indicator_education_levels VALUES
(3, 1);

INSERT INTO indicator_pec_goals VALUES
(3, 1),
(3, 2);

INSERT INTO indicator_ods4_goals VALUES
(3, 2);

INSERT INTO indicator_visualizations VALUES
(3, 1),
(3, 2),
(3, 4),
(3, 5);

INSERT INTO indicator_indexes VALUES
(3, 1),
(3, 2),
(3, 3);