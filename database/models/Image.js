const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


    let alias = "Images";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        prduct_id: { 
            type: dataTypes.INTEGER,
            default: null,
            /*references: {
                model: Products,
                key: 'id',
            }*/
        },
        image: {
            type: dataTypes.STRING(45),
            default:'product_defaultimg'
        }
    };

    let config = {
        tableName: "images",
        timestamps: false,
        underscored:true
    }

    const Image = sequelize.define(alias, cols, config);
    Image.associate = function (models){
        /*Image.belongsTo(models.Products, {
            as: "productImage",
            foreignKey: "image_id" 
        })*/
    }

    return Image;
}