const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {


    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        user_id: { 
            type: dataTypes.INTEGER,
            default:null,
        }
    };

    let config = {
        tableName: "cart",
        timestamps: false,
        underscored:true
    } 

    const Cart = sequelize.define(alias, cols, config);
    
    Cart.associate = function (models){
        Cart.hasMany(models.Orders, {
            as: "cartOrder",
            foreignKey: "cart_id" 
        })
        Cart.belongsTo(models.Users,{
            as:"userCart",
            foreignKey:"user_id"
        })
    }   
    return Cart;
}