-- Study groups (nhóm học tập): a few friends, a family or a class work towards one weekly goal and cheer each other on.
-- No accounts: the group code (8 characters) opens the group, and each member holds a member key on their device.
-- The tables keep only HMAC(pepper, code) and HMAC(pepper, member key), so the database alone opens nothing.
CREATE TABLE groups (
  id TEXT PRIMARY KEY,              -- HMAC of the group code
  name TEXT NOT NULL,
  goal INTEGER NOT NULL DEFAULT 0,  -- practice sessions a week for the whole group; 0 = automatic (3 per member)
  owner TEXT NOT NULL,              -- member id of the group leader
  room TEXT,                        -- an arena room opened for the group (6 digits) ...
  room_deck TEXT,
  room_until INTEGER,               -- ... shown on the group page until this time
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX groups_updated ON groups(updated_at);

-- stats = { wk: Monday of the week (YYYY-MM-DD, Vietnam time), n: practice sessions this week, days: '0110000' (Mon..Sun),
--           lw: sessions last week, st: streak in days, ld: last active day, dc: { d: day, k: deck, s: score } }
-- inbox = recent cheers and nudges received: [{ f: member id, e: emoji, t: time }]
CREATE TABLE group_members (
  gid TEXT NOT NULL,
  mid TEXT NOT NULL,
  key TEXT NOT NULL,
  nick TEXT NOT NULL,
  av TEXT NOT NULL,
  stats TEXT NOT NULL DEFAULT '{}',
  inbox TEXT NOT NULL DEFAULT '[]',
  joined_at INTEGER NOT NULL,
  seen_at INTEGER NOT NULL,
  PRIMARY KEY (gid, mid)
);
CREATE INDEX group_members_seen ON group_members(seen_at);
