const classes = [
    barbarian = {
        class : "Barbarian",
        hit_die : "d12",
        primary_ability : "Strength"
    },
    bard = {
        class : "Bard",
        hit_die : "d8",
        primary_ability : "Charisma"
    },
    cleric = {
        class : "Cleric",
        hit_die : "d8",
        primary_ability : "Wisdom"
    },
    paladin = {
        class : "Paladin",
        hit_die : "d10",
        primary_ability : "Strength & Charisma"
    },
    ranger = {
        class : "Ranger",
        hit_die : "d8",
        primary_ability : "Dexterity & Wisdom"
    },
    rogue = {
        class : "Rogue",
        hit_die : "d8",
        primary_ability : "Dexterity",
    },
    sorcerer = {
        class : "Sorcerer",
        hit_die : "d6",
        primary_ability : "Charisma",
    },
    warlock = {
        class : "Warlock",
        hit_die : "d8",
        primary_ability : "Charisma",
    },
    wizard = {
        class : "Wizard",
        hit_die : "d6",
        primary_ability : "Intelligence"
    }

]

const races = [ 
    {
        race: "Dragonborn", STR_Mod: 2, DEX_Mod:0, CONST_Mod: 0, INT_Mod: 0 , WIS_Mod: 0, CHAR_Mod: 1 
      },
      {
        race: "Dwarf", STR_Mod: 0, DEX_Mod:0, CONST_Mod: 2, INT_Mod: 0 , WIS_Mod: 0, CHAR_Mod: 0 
      },
      {
      race: "Elf", STR_Mod: 0, DEX_Mod:2, CONST_Mod: 0, INT_Mod: 0 , WIS_Mod: 0, CHAR_Mod: 0 },
      {
        race: "Gnome", STR_Mod: 0, DEX_Mod:0, CONST_Mod: 0, INT_Mod: 2 , WIS_Mod: 0, CHAR_Mod: 0 
      },
      {
        race: "Half-Elf", STR_Mod: 0, DEX_Mod:2, CONST_Mod: 0, INT_Mod: 1 , WIS_Mod: 1, CHAR_Mod: 2 
      },
      {
        race: "Halfling", STR_Mod: 0, DEX_Mod:2, CONST_Mod: 0, INT_Mod: 0 , WIS_Mod: 0, CHAR_Mod: 0 
      },
      {
        race: "Half-Orc", STR_Mod: 2, DEX_Mod:0, CONST_Mod: 1, INT_Mod: 0 , WIS_Mod: 0, CHAR_Mod: 0 
      },
      {
        race: "Human", STR_Mod: 1, DEX_Mod: 1, CONST_Mod: 1, INT_Mod: 1 , WIS_Mod: 1, CHAR_Mod: 1 
      },
      {
        race: "Tiefling", STR_Mod: 0, DEX_Mod:0, CONST_Mod: 0, INT_Mod: 1 , WIS_Mod: 0, CHAR_Mod: 2
      }

]

module.exports = (classes, races);



