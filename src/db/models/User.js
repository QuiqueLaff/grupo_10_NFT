const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define(alias, cols, config);

    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(45)
        },
        last_name: {
            type: dataTypes.STRING(45)
        },
        email: {
            type: dataTypes.STRING(45),
            unique: true
        },
        avatar: {
            type: dataTypes.STRING(45),
            defaultValue: 'user_defaultimg'
        },
    };

    let config = {
        tableName: "users",
        timestamps: false
    }


    return User;
}