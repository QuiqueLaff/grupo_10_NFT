const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        user_id: { 
            type: dataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            }
        }
    };

    let config = {
        tableName: "cart",
        timestamps: false
    }

    Cart.associate = function (models){
        Cart.belongsTo(models.Orders, {
            as: "cartOrder",
            foreignKey: "cart_id" 
        })
    }

    Cart.associate = function (models){
        Cart.belongsTo(models.Users, {
            as: "userCart",
            foreignKey: "user_id" 
        })
    }
    const Cart = sequelize.define(alias, cols, config);
    
    return Cart;
}