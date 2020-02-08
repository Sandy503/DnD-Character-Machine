SELECT * FROM DNDcharacter_db.race;

INSERT INTO race (race , STR_mod, CHAR_mod)
VALUES ("Dragonborn", 2, 1);

INSERT INTO race (race , CONST_mod)
VALUES ("Dwarf", 2);

INSERT INTO race (race, DEX_mod)
VALUES ("Elf", 2);

INSERT INTO race (race , INT_mod)
VALUES ("Gnome", 2);

INSERT INTO race (race , INT_mod, WIS_mod, CHAR_mod)
VALUES ("Half-Elf", 1 , 1, 2);

INSERT INTO race (race , DEX_mod)
VALUES ("Halfling", 2);

INSERT INTO race (race , STR_mod, CONST_mod)
VALUES ("Half-Orc", 2 , 1);

INSERT INTO race (race , STR_mod, DEX_mod, CONST_mod, INT_mod, WIS_mod, CHAR_mod)
VALUES ("Human", 1 , 1 ,1 ,1 ,1 ,1);
INSERT INTO race (race , INT_mod,  CHAR_mod)
VALUES ("Tiefling", 1, 2);

USE DNDcharacter_db;

CREATE TABLE class(
id INT NOT NULL AUTO_INCREMENT,
Class VARCHAR(100),
Hit_die VARCHAR(100),
Primary_ability VARCHAR(100),
PRIMARY KEY (id)
);

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Barbarian", "d12", "STRENGTH");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Bard", "d8", "CHARISMA");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Cleric", "d8", "WISDOM");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Paladin", "d10", "STENGTH & CHARISMA");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Ranger", "d10", "DEXTERITY & WISDOM");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Rogue", "d8", "DEXTERITY");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Sorecerer", "d6", "CHARISMA");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Warlock", "d8", "CHARISMA");

INSERT INTO class (Class, Hit_die, Primary_ability)
VALUES ("Wizard", "d6", "INTELLIGENCE");