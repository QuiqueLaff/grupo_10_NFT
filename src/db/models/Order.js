const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {

    const Order = sequelize.define(alias, cols, config);

    let alias = "Orders";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        user_id: { 
            type: dataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            }
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        product_id: { 
            type: dataTypes.INTEGER,
            references: {
                model: Product,
                key: 'id',
            }
        },
        cart_id: { 
            type: dataTypes.INTEGER,
            references: {
                model: Cart,
                key: 'id',
            }
        }
    };

    let config = {
        tableName: "orders",
        timestamps: false
    }


    return Order;
}