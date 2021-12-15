const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(alias, cols, config);

    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(5,0),
            allowNull: false
        },
        artist_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        artist_bio: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        artist_code: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            references: {
                model: Category,
                key: 'id',
            }
        },
        user_id: {
            type: dataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        image_id: {
            type: dataTypes.INTEGER,
            references: {
                model: Image,
                key: 'id'
            }
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    }


    return Product;
}