module.exports = (sequelize, Datatypes) => {
    const Character = sequelize.define("Character", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        class: {
            type: Datatypes.STRING,
            allowNull: false
        },
        race: {
            type: Datatypes.INTEGER,
            references: {
                model: character,
                key: "id"
            }
        },
        STRENGTH: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        DEXTERITY: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        CONSTITUTION: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        INTELLIGENCE: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        WISDOM: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        Alignment: {
            type: Datatypes.STRING
        }
    });
    return Character;
};