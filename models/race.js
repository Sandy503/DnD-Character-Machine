module.exports = (sequelize, Datatypes) => {
    const Race = sequelize.define("Race", {
        race : {
            type: Datatypes.STRING,
            allowNull: false
        },
        STR_Mod: {
            type: Datatypes.Integer
        },
        DEX_Mod: {
            type: Datatypes.Integer
        },
        CONST_Mod: {
            type: Datatypes.Integer
        },
        INT_Mod: {
            type: Datatypes.Integer
        },
        WIS_Mod: {
            type: Datatypes.Integer
        },
        CHAR_Mod: {
            type: Datatypes.Integer
        }
    });
    return Race;
}