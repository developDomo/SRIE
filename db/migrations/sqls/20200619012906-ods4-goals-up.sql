ALTER TABLE ods4_scales RENAME COLUMN scale_order TO goal_order;
ALTER TABLE ods4_scales RENAME TO ods4_goals;

ALTER TABLE indicator_ods4_scales RENAME COLUMN ods4_scale_id TO ods4_goal_id;
ALTER TABLE indicator_ods4_scales RENAME TO indicator_ods4_goals;

INSERT INTO indicator_ods4_goals VALUES
(1, 2),
(2, 2),
(4, 2),
(5, 2),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1);