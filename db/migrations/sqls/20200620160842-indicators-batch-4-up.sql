-- fix visualizations
UPDATE visualizations SET label = 'wealth_quintile' WHERE id = 4;
UPDATE visualizations SET label = 'location' WHERE id = 5;

-- 11. ROFST+ROFST_PHH.SCH_AGE_GROUP
INSERT INTO indicators VALUES
(11, 'ROFST+ROFST_PHH.SCH_AGE_GROUP', '{ "stat_unit": ["ROFST", "ROFST_PHH"], "age": "SCH_AGE_GROUP" }'::JSONB, 11, 'SDG4', 'ROFST+ROFST_PHH.GPIA+PT+GLPIA+SESPIA.L1T3+L1+L2+L3._T._T+F+M.SCH_AGE_GROUP._T.INST_T._Z._T._Z+_T+Q1+Q2+Q3+Q4+Q5._Z._T+_Z+URB+RUR._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(11, 1);

INSERT INTO indicator_education_levels VALUES
(11, 3),
(11, 4);

INSERT INTO indicator_pec_goals VALUES
(11, 1),
(11, 2);

INSERT INTO indicator_ods4_goals VALUES
(11, 1);

INSERT INTO indicator_visualizations VALUES
(11, 1),
(11, 2),
(11, 4),
(11, 5);

INSERT INTO indicator_indexes VALUES
(11, 4),
(11, 5),
(11, 6);

INSERT INTO indicator_variations VALUES
(11, '11-a', '{ "stat_unit": "ROFST", "edu_level": "L1T3" }'::JSONB, 'a'),
(11, '11-b', '{ "stat_unit": "ROFST_PHH", "edu_level": "L1" }'::JSONB, 'b'),
(11, '11-c', '{ "stat_unit": "ROFST_PHH", "edu_level": "L2" }'::JSONB, 'c'),
(11, '11-d', '{ "stat_unit": "ROFST_PHH", "edu_level": "L3" }'::JSONB, 'd');

-- 12. STU.GE2_OVER_AGE
INSERT INTO indicators VALUES
(12, 'STU.GE2_OVER_AGE', '{ "stat_unit": "STU", "age": "GE2_OVER_AGE" }'::JSONB, 12, 'SDG4', 'STU.PT+GPI.L1+L2._T+C4.F+M+_T.GE2_OVER_AGE._T.INST_T._Z._T._Z._Z._T.INIT._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(12, 3);

INSERT INTO indicator_education_levels VALUES
(12, 3),
(12, 4);

INSERT INTO indicator_pec_goals VALUES
(12, 1),
(12, 2);

INSERT INTO indicator_ods4_goals VALUES
(12, 1);

INSERT INTO indicator_visualizations VALUES
(12, 1),
(12, 2);

INSERT INTO indicator_indexes VALUES
(12, 1);

INSERT INTO indicator_variations VALUES
(12, '12-a', '{ "edu_level": "L1" }'::JSONB, 'a'),
(12, '12-b', '{ "edu_level": "L2" }'::JSONB, 'b'),
(12, '12-c', '{ "edu_level": "L3" }'::JSONB, 'c');

-- 13. DR.G1.L1+L2
INSERT INTO indicators VALUES
(13, 'DR.G1+G2+G3+G4+G5+G6.L1+L2', '{ "stat_unit": "DR", "grade": [ "G1", "G2", "G3", "G4", "G5", "G6" ], "edu_level": [ "L1", "L2" ] }'::JSONB, 13, 'EDU_NON_FINANCE', 'DR.PT.L1+L2._T+C4.F+M+_T._T.G1+G2+G3+G4+G5+G6.INST_T._Z._Z._T.INIT._T._Z._Z._Z._Z._Z.W00.W00._Z');

INSERT INTO indicator_topics VALUES
(13, 3);

INSERT INTO indicator_education_levels VALUES
(13, 3),
(13, 4);

INSERT INTO indicator_pec_goals VALUES
(13, 1),
(13, 2);

INSERT INTO indicator_ods4_goals VALUES
(13, 1);

INSERT INTO indicator_visualizations VALUES
(13, 1),
(13, 2);

INSERT INTO indicator_variations VALUES
(13, '13-a', '{ "edu_level": "L1", "grade": "G1" }'::JSONB, 'a'),
(13, '13-b', '{ "edu_level": "L1", "grade": "G2" }'::JSONB, 'b'),
(13, '13-c', '{ "edu_level": "L1", "grade": "G3" }'::JSONB, 'c'),
(13, '13-d', '{ "edu_level": "L1", "grade": "G4" }'::JSONB, 'd'),
(13, '13-e', '{ "edu_level": "L1", "grade": "G5" }'::JSONB, 'e'),
(13, '13-f', '{ "edu_level": "L1", "grade": "G6" }'::JSONB, 'f'),
(13, '13-g', '{ "edu_level": "L2", "grade": "G1" }'::JSONB, 'g'),
(13, '13-h', '{ "edu_level": "L2", "grade": "G2" }'::JSONB, 'h'),
(13, '13-i', '{ "edu_level": "L2", "grade": "G3" }'::JSONB, 'i'),
(13, '13-j', '{ "edu_level": "L2", "grade": "G4" }'::JSONB, 'j'),
(13, '13-k', '{ "edu_level": "L2", "grade": "G5" }'::JSONB, 'k');

-- 14. REPP.G1+G2+G3+G4+G5+G6 
INSERT INTO indicators VALUES
(14, 'REPP.G1+G2+G3+G4+G5+G6', '{ "stat_unit": "REPP", "grade": [ "G1", "G2", "G3", "G4", "G5", "G6" ], "edu_level": "L1" }'::JSONB, 14, 'EDU_NON_FINANCE', 'REPP.PT.L1._T.F+M+_T._T.G1+G2+G3+G4+G5+G6.INST_T._Z._Z._T.INIT._T._Z._Z._Z._Z._Z.W00.W00._Z');

INSERT INTO indicator_topics VALUES
(14, 3);

INSERT INTO indicator_education_levels VALUES
(14, 3);

INSERT INTO indicator_pec_goals VALUES
(14, 1),
(14, 2);

INSERT INTO indicator_ods4_goals VALUES
(14, 1);

INSERT INTO indicator_visualizations VALUES
(14, 1),
(14, 2);

INSERT INTO indicator_variations VALUES
(14, '14-a', '{ "grade": "G1" }'::JSONB, 'a'),
(14, '14-b', '{ "grade": "G2" }'::JSONB, 'b'),
(14, '14-c', '{ "grade": "G3" }'::JSONB, 'c'),
(14, '14-d', '{ "grade": "G4" }'::JSONB, 'd'),
(14, '14-e', '{ "grade": "G5" }'::JSONB, 'e'),
(14, '14-f', '{ "grade": "G6" }'::JSONB, 'f');

-- 15. FREE_EDU+COMP_EDU.L1T3+L02T3 
INSERT INTO indicators VALUES
(15, 'FREE_EDU+COMP_EDU.L1T3+L02T3', '{ "stat_unit": ["FREE_EDU", "COMP_EDU"], "edu_level": [ "L1T3", "L02T3" ] }'::JSONB, 15, 'SDG4', 'FREE_EDU+COMP_EDU.YR.L1T3+L02T3._T._T._T._T.INST_T._Z._T._Z._Z._T._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(15, 2);

INSERT INTO indicator_education_levels VALUES
(15, 6);

INSERT INTO indicator_pec_goals VALUES
(15, 1),
(15, 2);

INSERT INTO indicator_ods4_goals VALUES
(15, 1);

INSERT INTO indicator_visualizations VALUES
(15, 3);

INSERT INTO indicator_variations VALUES
(15, '15-a', '{ "stat_unit": "FREE_EDU", "edu_level": "L1T3" }'::JSONB, 'a'),
(15, '15-b', '{ "stat_unit": "COMP_EDU", "edu_level": "L02T3" }'::JSONB, 'b'),
(15, '15-c', '{ "stat_unit": "FREE_EDU", "edu_level": "L1T3" }'::JSONB, 'c'),
(15, '15-d', '{ "stat_unit": "COMP_EDU", "edu_level": "L02T3" }'::JSONB, 'd');

-- 16 SDG4 PRYA.Y_GE15
INSERT INTO indicators VALUES
(16, 'PRYA.Y_GE15', '{ "stat_unit": "PRYA", "age": "Y_GE15" }'::JSONB, 16, 'SDG4', 'PRYA.PT+GPI._T._T.F+M+_T.Y_GE15._T._Z._Z._T._Z._Z._T._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(16, 1);

INSERT INTO indicator_education_levels VALUES
(16, 6);

INSERT INTO indicator_pec_goals VALUES
(16, 3);

INSERT INTO indicator_ods4_goals VALUES
(16, 2);

INSERT INTO indicator_visualizations VALUES
(16, 1),
(16, 2);

INSERT INTO indicator_indexes VALUES
(16, 1);

-- 17 GER.L5T8
INSERT INTO indicators VALUES
(17, 'GER.L5T8', '{ "stat_unit": "GER", "edu_level": "L5T8" }'::JSONB, 17, 'SDG4', 'GER.GPI+PT.L5T8._T._T+F+M.SCH_AGE_GROUP._T.INST_T._Z._T._T._Z._T._T._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(17, 1);

INSERT INTO indicator_education_levels VALUES
(17, 5);

INSERT INTO indicator_pec_goals VALUES
(17, 3);

INSERT INTO indicator_ods4_goals VALUES
(17, 2);

INSERT INTO indicator_visualizations VALUES
(17, 1),
(17, 2);

INSERT INTO indicator_indexes VALUES
(17, 1);

-- SOLO GPI
-- INSERT INTO indicators VALUES
-- (18, 'GER.L5T8', '{ "stat_unit": "STU", "unit_measure": "PER", "edu_level": "L5T8" }'::JSONB, 18, 'EDU_NON_FINANCE', 'STU.PER.L5T8._T.F+M+_T._T._T.INST_T._Z._Z._T._T._T._Z._Z._Z._Z._Z.W00.W00._Z');

-- INSERT INTO indicator_topics VALUES
-- (18, 1);

-- INSERT INTO indicator_education_levels VALUES
-- (18, 5);

-- INSERT INTO indicator_pec_goals VALUES
-- (18, 3);

-- INSERT INTO indicator_ods4_goals VALUES
-- (18, 2);

-- INSERT INTO indicator_visualizations VALUES
-- (18, 1); -- UNIT MEASURE????

-- 19 LR.L5T8 
INSERT INTO indicators VALUES
(19, 'LR.L5T8', '{ "stat_unit": "LR", "age": [ "Y15T24", "Y_GE15" ] }'::JSONB, 19, 'SDG4', 'LR.GPI+PT._Z._Z._T+F+M.Y15T24+Y_GE15._Z._Z._Z._Z._Z._Z._T._Z._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(19, 3);

INSERT INTO indicator_education_levels VALUES
(19, 6);

INSERT INTO indicator_pec_goals VALUES
(19, 4);

INSERT INTO indicator_ods4_goals VALUES
(19, 6);

INSERT INTO indicator_visualizations VALUES
(19, 1),
(19, 2);

INSERT INTO indicator_indexes VALUES
(19, 1);

INSERT INTO indicator_variations VALUES
(19, '19-a', '{ "age": "Y15T24" }'::JSONB, 'a'),
(19, '19-b', '{ "age": "Y_GE15" }'::JSONB, 'b');

-- 20 EA.Y_GE25 
INSERT INTO indicators VALUES
(20, 'EA.Y_GE25', '{ "stat_unit": "EA", "age": "Y_GE25" }'::JSONB, 20, 'SDG4', 'EA.PT+GPI._Z+L1T8+L5T8+L6T8+L7T8+L8._Z._T.Y_GE25._Z._Z.L1T8+_Z+L5T8+L6T8+L7_8+L8._Z._Z._Z._T._Z._T._Z._Z._Z');

INSERT INTO indicator_topics VALUES
(20, 3);

INSERT INTO indicator_education_levels VALUES
(20, 3),
(20, 4),
(20, 5);

INSERT INTO indicator_pec_goals VALUES
(20, 5);

INSERT INTO indicator_ods4_goals VALUES
(20, 4);

INSERT INTO indicator_visualizations VALUES
(20, 1);

INSERT INTO indicator_indexes VALUES
(20, 1);

INSERT INTO indicator_variations VALUES
(20, '20-a', '{ "edu_level": [ "_Z", "L1T8" ], "edu_attain": [ "_Z", "L1T8" ] }'::JSONB, 'a'),
(20, '20-b', '{ "edu_level": [ "_Z", "L5T8" ], "edu_attain": [ "_Z", "L5T8" ] }'::JSONB, 'b'),
(20, '20-c', '{ "edu_level": [ "_Z", "L6T8" ], "edu_attain": [ "_Z", "L6T8" ] }'::JSONB, 'c'),
(20, '20-d', '{ "edu_level": [ "_Z", "L7T8" ], "edu_attain": [ "_Z", "L7T8" ] }'::JSONB, 'd'),
(20, '20-e', '{ "edu_level": [ "_Z", "L8" ], "edu_attain": [ "_Z", "L8" ] }'::JSONB, 'e');