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
            default: null,
            /*references: {
                model: User,
                key: 'id',
            }*/
        },
        quantity: {
            type: dataTypes.INTEGER,
            default:null,
        },
        product_id: { 
            type: dataTypes.INTEGER,
            default:null,
            /*references: {
                model: Product,
                key: 'id',
            }*/
        },
        cart_id: { 
            type: dataTypes.INTEGER,
            default:null,
            /*references: {
                model: Cart,
                key: 'id',
            }*/
        }
    };

    let config = {
        tableName: "orders",
        timestamps: false,
        underscored:true
    }

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models){
        /*Order.belongsTo(models.Users, {
            as: "userProduct",
            foreignKey: "user_id" 
        })
        Order.belongsTo(models.Cart, {
            as: "cartProduct",
            foreignKey: "cart_id" 
        })
        Order.hasMany(models.Products, {
            as: "orderProducts",
            foreignKey: "order_id" 
        })*/

    }

    
    



    return Order;
}