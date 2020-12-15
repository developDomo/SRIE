UPDATE indicators 
SET uis_data_query = 'NIR.PT.L1._T.F+M+_T.TH_ENTRY_AGE.G1.INST_T._Z._Z._T.INIT._T._Z._Z._Z._Z._Z.W00.W00._Z'
WHERE id = 8;

DELETE FROM indicator_indexes 
WHERE indicator_id = 8 
AND index_id = 1;