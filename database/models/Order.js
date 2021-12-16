const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


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



    Order.associate = function (models){
        Order.belongsTo(models.Users, {
            as: "userProduct",
            foreignKey: "user_id" 
        })
    }

    
    Order.associate = function (models){
        Order.hasMany(models.Products, {
            as: "orderProducts",
            foreignKey: "order_id" 
        })
    }

    Order.associate = function (models){
        Order.belongsTo(models.Cart, {
            as: "cartProduct",
            foreignKey: "cart_id" 
        })
    }

    const Order = sequelize.define(alias, cols, config);
    



    return Order;
}