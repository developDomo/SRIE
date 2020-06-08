ALTER TABLE indicators ADD COLUMN updated_at TIMESTAMP;
ALTER TABLE uis_data RENAME TO sdg4;

CREATE TABLE edu_non_finance (
    dataflow VARCHAR(32),
    stat_unit VARCHAR(25),
    unit_measure VARCHAR(8),
    edu_level VARCHAR(8),
    edu_cat VARCHAR(8),
    sex VARCHAR(8),
    age VARCHAR(16),
    grade VARCHAR(8),
    sector_edu VARCHAR(8),
    edu_attain VARCHAR(8),
    wealth_quintile VARCHAR(8),
    location VARCHAR(8),
    edu_type VARCHAR(8),
    edu_field VARCHAR(8),
    subject VARCHAR(8),
    infrastr VARCHAR(8),
    se_bkgrd VARCHAR(8),
    teach_experience VARCHAR(16),
    contract_type VARCHAR(16),
    country_origin VARCHAR(16),
    region_dest VARCHAR(16),
    imm_status VARCHAR(8),
    ref_area VARCHAR(8),
    time_period SMALLINT,
    obs_value NUMERIC(8,5),
    unit_mult SMALLINT,
    obs_status VARCHAR(8),
    freq VARCHAR(8),
    decimals SMALLINT
);