const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {

    const Category = sequelize.define(alias, cols, config);

    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        category: { 
            type: dataTypes.STRING(45),
            unique: true
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false
    }


    return Category;
}