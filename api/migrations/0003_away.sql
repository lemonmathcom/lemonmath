-- Tests: how many times the student left the page (switched app or tab) while working. Shown to the teacher; the
-- student is told about it before starting.
ALTER TABLE attempts ADD COLUMN away INTEGER NOT NULL DEFAULT 0;
