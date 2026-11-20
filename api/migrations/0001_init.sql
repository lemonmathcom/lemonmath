-- Lemonmath classroom API: teacher accounts, classes, homework with a time window.
-- Times are milliseconds since 1970 (UTC). Every child row is removed with its parent by the API.

CREATE TABLE teachers (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  school TEXT NOT NULL DEFAULT '',
  pw TEXT NOT NULL,                 -- HMAC(pepper, password hash made in the browser)
  rc TEXT NOT NULL,                 -- HMAC(pepper, recovery code)
  fails INTEGER NOT NULL DEFAULT 0,
  locked_until INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE TABLE sessions (
  token TEXT PRIMARY KEY,           -- SHA-256 of the token the browser keeps
  teacher_id TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX sessions_teacher ON sessions(teacher_id);
CREATE INDEX sessions_expiry ON sessions(expires_at);

CREATE TABLE classes (
  id TEXT PRIMARY KEY,
  teacher_id TEXT NOT NULL,
  name TEXT NOT NULL,
  grade TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL
);
CREATE INDEX classes_teacher ON classes(teacher_id);

CREATE TABLE students (
  id TEXT PRIMARY KEY,
  class_id TEXT NOT NULL,
  no INTEGER NOT NULL,              -- number in the class list
  name TEXT NOT NULL,
  pin TEXT NOT NULL,                -- 4-digit personal code the teacher hands out
  active INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX students_class ON students(class_id);

CREATE TABLE assignments (
  id TEXT PRIMARY KEY,              -- the 6-character code students type
  teacher_id TEXT NOT NULL,
  class_id TEXT NOT NULL,
  title TEXT NOT NULL,
  lang TEXT NOT NULL,
  bank TEXT NOT NULL DEFAULT '',
  mode TEXT NOT NULL,               -- home | class2 | free
  open_at INTEGER NOT NULL,
  close_at INTEGER NOT NULL,
  duration_min INTEGER NOT NULL DEFAULT 0,  -- 0 = until close_at
  require_pin INTEGER NOT NULL DEFAULT 1,
  show_key TEXT NOT NULL DEFAULT 'close',   -- submit | close
  shuffle INTEGER NOT NULL DEFAULT 1,
  n INTEGER NOT NULL,
  items TEXT NOT NULL,              -- JSON snapshot of the questions, keys included
  created_at INTEGER NOT NULL,
  purge_at INTEGER NOT NULL
);
CREATE INDEX assignments_class ON assignments(class_id);
CREATE INDEX assignments_purge ON assignments(purge_at);

CREATE TABLE attempts (
  id TEXT PRIMARY KEY,
  assignment_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  token TEXT,                       -- SHA-256 of the student's token
  frame TEXT,                       -- JSON { ord: [...], perm: { i: [...] } }: this student's order of questions and options
  answers TEXT NOT NULL DEFAULT '{}',  -- JSON, in the teacher's (canonical) order
  pin_fails INTEGER NOT NULL DEFAULT 0,
  started_at INTEGER,
  saved_at INTEGER,
  submitted_at INTEGER,
  auto INTEGER NOT NULL DEFAULT 0,  -- 1 = handed in by the server when time ran out
  late INTEGER NOT NULL DEFAULT 0,  -- 1 = reached the server after the deadline (offline at the time)
  score REAL,
  max REAL,
  UNIQUE (assignment_id, student_id)
);
CREATE INDEX attempts_token ON attempts(token);
