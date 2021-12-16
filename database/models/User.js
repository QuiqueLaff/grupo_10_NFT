const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


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

    const User = sequelize.define(alias, cols, config);


    User.associate = function (models){
        User.hasMany(models.Product, {
            as: "userProducts",
            foreignKey: "user_id" 
        })
    }

    User.associate = function (models){
        User.belongsTo(models.Cart, {
            as: "cartUser",
            foreignKey: "user_id" 
        })
    }

    User.associate = function (models){
        User.belongsTo(models.Order, {
            as: "userOrder",
            foreignKey: "user_id" 
        })
    }

    return User;
}