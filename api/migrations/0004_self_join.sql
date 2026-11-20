-- A class can let students type their own name the first time they open an assignment (the teacher did not enter a
-- list, or someone is missing from it). Such a student gets a personal code at once and is marked "self" so the
-- teacher can check the name.
ALTER TABLE classes ADD COLUMN self_join INTEGER NOT NULL DEFAULT 0;
ALTER TABLE students ADD COLUMN self INTEGER NOT NULL DEFAULT 0;
