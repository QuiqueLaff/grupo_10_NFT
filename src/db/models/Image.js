const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {

    const Image = sequelize.define(alias, cols, config);

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


    return Image;
}