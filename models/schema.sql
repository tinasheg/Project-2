DROP DATABASE IF EXISTS hangmanDB;
CREATE DATABASE hangmanDB;

DROP DATABASE IF EXISTS testDB;
CREATE DATABASE testDB;

INSERT INTO dictionaries (word, level)
VALUES ("scary", 1);
INSERT INTO dictionaries (word, level)
VALUES ("food", 1);
INSERT INTO dictionaries (word, level)
VALUES ("animal", 1);
INSERT INTO dictionaries (word, level)
VALUES ("study", 1);
INSERT INTO dictionaries (word, level)
VALUES ("advanced", 2);
INSERT INTO dictionaries (word, level)
VALUES ("harder", 2);
INSERT INTO dictionaries (word, level)
VALUES ("moment", 2);
INSERT INTO dictionaries (word, level)
VALUES ("inquirer", 2);
INSERT INTO dictionaries (word, level)
VALUES ("awkward", 3);
INSERT INTO dictionaries (word, level)
VALUES ("newbie", 3);
INSERT INTO dictionaries (word, level)
VALUES ("mystify", 3);
INSERT INTO dictionaries (word, level)
VALUES ("oxygen", 3);
INSERT INTO dictionaries (word, level)
VALUES ("ostracize", 3);