DELETE FROM indicator_ods4_goals;

ALTER TABLE ods4_goals RENAME COLUMN goal_order TO  scale_order;
ALTER TABLE ods4_goals RENAME TO ods4_scales;

ALTER TABLE indicator_ods4_goals RENAME TO indicator_ods4_scales;
ALTER TABLE indicator_ods4_scales RENAME COLUMN ods4_goal_id TO ods4_scale_id;