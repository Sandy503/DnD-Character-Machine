const models = require("../models");



  const class_table = User.build(
    { class: "Barbarian" , hit_die: "d12", primary_ability: "STRENGTH"},
  {
    class: "Bard" , hit_die: "d8", primary_ability: "CHARISMA"},
    {
      class: "Cleric" , hit_die: "d8", primary_ability: "WISDOM"
    },
    {
      class: "Paladin" , hit_die: "d10", primary_ability: "STRENGTH & CHARISMA"
    },
    {
      class: "Ranger" , hit_die: "d10", primary_ability: "DEXTERITY & WISDOM"
    },
    {
      class: "Rogue" , hit_die: "d10", primary_ability: "DEXTERITY"
    },
    {
      class: "Sorcerer" , hit_die: "d16", primary_ability: "CHARISMA"
    },
    {
      class: "Warlock" , hit_die: "d8", primary_ability: "CHARISMA"
    },
    {
      class: "Wizard" , hit_die: "d6", primary_ability: "INTELLIGENCE"
    });


class_table();

const race_table = User.build (
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
  });