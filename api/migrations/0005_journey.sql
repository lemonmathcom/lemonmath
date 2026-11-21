-- "Learning code" (mã học tập): a student's progress saved without an account. The code is the only key; the table
-- keeps only HMAC(pepper, code), so the database alone cannot be used to open anyone's journey.
-- data = { v, nick, nt, goal, gt, done: { lesson id: time (negative = unticked) }, log: [ quiz results ] }
CREATE TABLE journeys (
  id TEXT PRIMARY KEY,
  data TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX journeys_updated ON journeys(updated_at);

-- small counters for rate limits (key, count, expiry)
CREATE TABLE rate (
  k TEXT PRIMARY KEY,
  n INTEGER NOT NULL,
  until INTEGER NOT NULL
);
