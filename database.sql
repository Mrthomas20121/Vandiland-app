
CREATE TABLE users(
  id varchar(100) NOT NULL,
  user varchar(255) NOT NULL,
  `mod` varchar(5) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE punishments(
  id INT AUTO_INCREMENT NOT NULL,
  userID varchar(100) NOT NULL,
  `type` varchar(10) NOT NULL,
  moderator varchar(30) NOT NULL,
  reason varchar(255) NOT NULL,
  `time` varchar(100),
  channel varchar(255) NOT NULL,
  PRIMARY KEY(id)
);
ALTER TABLE punishments ADD CONSTRAINT fk_users_id FOREIGN KEY (userID) REFERENCES users(id);