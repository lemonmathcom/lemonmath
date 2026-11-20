-- Password reset codes sent by e-mail, and a log to keep under the e-mail provider's daily limit.
CREATE TABLE resets (
  email TEXT PRIMARY KEY,
  code TEXT NOT NULL,               -- HMAC(pepper, 6-digit code)
  expires_at INTEGER NOT NULL,
  tries INTEGER NOT NULL DEFAULT 0,
  sent INTEGER NOT NULL DEFAULT 0,  -- codes sent since window_start (at most 3 an hour)
  window_start INTEGER NOT NULL
);

CREATE TABLE mail_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  kind TEXT NOT NULL,
  at INTEGER NOT NULL
);
CREATE INDEX mail_log_at ON mail_log(at);
