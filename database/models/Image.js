const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


    let alias = "Images";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        product_id: { 
            type: dataTypes.INTEGER,
            references: {
                model: Product,
                key: 'id',
            }
        },
        image: {
            type: dataTypes.STRING(45),
        }
    };

    let config = {
        tableName: "images",
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = function (models){
        Image.belongsTo(models.Products, {
            as: "productImage",
            foreignKey: "image_id" 
        })
    }

    return Image;
}