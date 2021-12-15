const Sequelize = require('sequelize');


module.exports = (sequelize, dataTypes) => {

    const Cart = sequelize.define(alias, cols, config);

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


    return Cart;
}