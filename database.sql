
CREATE TABLE punishments(
  userID varchar(100) NOT NULL,
  type varchar(10) NOT NULL
  moderator varchar(30) NOT NULL
  reason varchar(255) NOT NULL,
  time varchar(100),
  channel varchar(255) NOT NULL,
  PRIMARY KEY(userID)
);
CREATE TABLE users(
  id varchar(40) NOT NULL,
  user varchar(255) NOT NULL,
  mod boolean NOT NULL
  PRIMARY KEY(userID)
);

ALTER TABLE punishments ADD CONSTRAINT fk_punishment_id FOREIGN KEY (userid) REFERENCES users(id);
ALTER TABLE punishments ADD CONSTRAINT fk_mod_punishment FOREIGN KEY (moderator) REFERENCES users(mod);