-- ods4_scales
INSERT INTO ods4_scales VALUES
(1, '4.1', '4-1', 1),
(2, '4.2', '4-2', 2),
(3, '4.3', '4-3', 3),
(4, '4.4', '4-4', 4),
(5, '4.5', '4-5', 5),
(6, '4.6', '4-6', 6),
(7, '4.7', '4-7', 7),
(8, '4.a', '4-a', 8),
(9, '4.b', '4-b', 9),
(10, '4.c', '4-c', 10);

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