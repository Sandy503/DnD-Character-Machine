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
            type: Datatypes.STRING
        }
    });

    return Class
}