const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: { 
            type: dataTypes.STRING,
            unique: true,
            allowNull:false
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models){
        Category.hasMany(models.Products, {
            as: "categoryProducts",
            foreignKey: "category_id" 
        })
    }

    return Category;
}