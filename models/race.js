module.exports = (sequelize, Datatypes) => {
    const Race = sequelize.define("Race", {
        race : {
            type: Datatypes.STRING,
            allowNull: false
        },
        STR_Mod: {
            type: Datatypes.INTEGER
        },
        DEX_Mod: {
            type: Datatypes.INTEGER
        },
        CONST_Mod: {
            type: Datatypes.INTEGER
        },
        INT_Mod: {
            type: Datatypes.INTEGER
        },
        WIS_Mod: {
            type: Datatypes.INTEGER
        },
        CHAR_Mod: {
            type: Datatypes.INTEGER
        }
    });
    return Race;
}