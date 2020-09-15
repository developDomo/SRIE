UPDATE indicators 
SET translation_key = 'XUNIT.GOV.FFNTP',
    query = '{ "stat_unit": "XUNIT", "source_fund": "GOV", "fund_flow": "FFNTP" }'::JSONB,
    uis_data_query = 'XUNIT.PPP_CONST.L02+L1+L2_3+L5T8._T._T._T.GOV.FFNTP._Z._Z.'
WHERE id = 22;

DELETE FROM edu_non_finance WHERE stat_unit = 'TRTEACH' and unit_measure = 'PER';

UPDATE indicators 
SET translation_key = 'TRTP.INST_T', 
    query = '{ "stat_unit": "TRTP", "sector_edu": "INST_T" }'::JSONB,
    uis_data_query = 'TRTP.PT+GPI.L02+L1+L2+L3+L2_3._T.F+M+_T._T._T.INST_T._Z._T._Z._Z._T._T._T._Z._Z._Z',
    uis_unit_measure = 'PT',
    uis_dataset = 'SDG4'
WHERE id = 23;

INSERT INTO indicator_indexes VALUES 
(23, 1);