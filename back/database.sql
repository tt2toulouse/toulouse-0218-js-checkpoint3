CREATE DATABASE wcs_playalist CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'wilderalaplaya'@'localhost' IDENTIFIED BY 'qwerty1234';
GRANT ALL PRIVILEGES on wcs_playalist.* to 'wilderalaplaya'@'localhost';

USE wcs_playalist;

CREATE TABLE IF NOT EXISTS items (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  picture VARCHAR(255)
);

INSERT INTO wcs_playalist (name, picture) VALUES
  ('Tongs','/images/tongs.jpg'),
  ('Ballon de plage','/images/ballon.jpg'),
  ('Raquettes de plage','/images/raquettes.jpg'),
  ('Bouée grenouille','/images/bouee-grenouille.jpg');