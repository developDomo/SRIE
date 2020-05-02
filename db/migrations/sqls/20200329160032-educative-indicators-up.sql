-- indicators
CREATE TABLE indicators (
    id SMALLINT PRIMARY KEY,
    translation_key VARCHAR(250),
    query JSONB NOT NULL,
    code SMALLINT
);

-- related_indicators
CREATE TABLE related_indicators (
    indicator_id SMALLINT REFERENCES indicators,
    related_id SMALLINT REFERENCES indicators
);

-- indicator_variations
CREATE TABLE indicator_variations (
    indicator_id SMALLINT REFERENCES indicators,
    translation_key VARCHAR(250) NOT NULL,
    query JSONB NOT NULL,
    code CHAR,
    CONSTRAINT unq_indicator_variation UNIQUE(indicator_id, code)
);

-- visualizations
CREATE TABLE visualizations (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(25) NOT NULL,
    query JSONB NOT NULL,
    label VARCHAR(25) NOT NULL,
    label_root VARCHAR(50) NOT NULL
);

-- indicator_visualizations
CREATE TABLE indicator_visualizations (
    indicator_id SMALLINT REFERENCES indicators,
    visualization_id SMALLINT REFERENCES visualizations
);

-- indexes
CREATE TABLE indexes (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(25) NOT NULL,
    query JSONB NOT NULL
);

-- indicator_indexes
CREATE TABLE indicator_indexes (
    indicator_id SMALLINT REFERENCES indicators,
    index_id SMALLINT REFERENCES indexes
);

-- pec goals
CREATE TABLE pec_goals (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(5) UNIQUE,
    translation_key VARCHAR(5) NOT NULL,
    goal_order SMALLINT
);

-- indicators_pec_goals
CREATE TABLE indicator_pec_goals (
    indicator_id SMALLINT REFERENCES indicators,
    pec_goal_id SMALLINT REFERENCES pec_goals
);

-- topics
CREATE TABLE topics (
    id SMALLINT PRIMARY KEY,
    translation_key VARCHAR(100) NOT NULL
);

-- indicators_topics
CREATE TABLE indicator_topics (
    indicator_id SMALLINT REFERENCES indicators,
    topic_id SMALLINT REFERENCES topics
);

-- educational_levels
CREATE TABLE educational_levels (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(5) UNIQUE
);

-- indicators_educational_levels
CREATE TABLE indicator_educational_levels (
    indicator_id SMALLINT REFERENCES indicators,
    educational_level_id SMALLINT REFERENCES educational_levels
);

-- ods4 scales
CREATE TABLE ods4_scales (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(5),
    translation_key VARCHAR(5),
    scale_order SMALLINT
);

-- indicators_ods4_scales
CREATE TABLE indicator_ods4_scales (
    indicator_id SMALLINT REFERENCES indicators,
    ods4_scale_id SMALLINT REFERENCES ods4_scales
);

-- uis_data
CREATE TABLE uis_data (
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
    subject VARCHAR(8),
    wealth_quintile VARCHAR(8),
    infrastr VARCHAR(8),
    location VARCHAR(8),
    edu_type VARCHAR(8),
    se_bkgrd VARCHAR(8),
    source_fund VARCHAR(8),
    fund_flow VARCHAR(8),
    imm_status VARCHAR(8),
    ref_area VARCHAR(8),
    time_period SMALLINT,
    obs_value NUMERIC(8,5),
    unit_mult SMALLINT,
    obs_status VARCHAR(8),
    freq VARCHAR(8),
    decimals SMALLINT
);
