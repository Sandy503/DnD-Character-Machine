module.exports = (sequelize, Datatypes) => {
    const Class = sequelize.define("Class", {
        class: {
            type: Datatypes.STRING,
            allowNull: false
        },
        hit_die: {
            type: Datatypes.STRING
        },
        primary_ability: {
            type: Datatypes.String
        }
    });
(async () => {
    await sequelize.sync({ force: true});
    
})
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
    return Class;
}
    
