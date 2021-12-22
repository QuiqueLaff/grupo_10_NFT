const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


    let alias = "Orders";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
            default:null,
        },
        cart_id: { 
            type: dataTypes.INTEGER,
            default:null,

        }
    };

    let config = {
        tableName: "orders",
        timestamps: false,
        underscored:true
    }

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models){
        Order.belongsTo(models.Cart, {
            as: "cartProduct",
            foreignKey: "cart_id" 
        })
        Order.hasMany(models.Products, {
            as: "orderProducts",
            foreignKey: "order_id" 
        })

    }  
    return Order;
}