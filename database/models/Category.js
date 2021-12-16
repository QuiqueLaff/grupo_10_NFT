const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


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

    const Category = sequelize.define(alias, cols, config);


    Category.associate = function (models){
        Category.hasMany(models.Products, {
            as: "categoryProducts",
            foreignKey: "category_id" 
        })
    }

    return Category;
}