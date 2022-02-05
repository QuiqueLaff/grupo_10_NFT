const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {

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
            type: dataTypes.INTEGER(1000),
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
            allowNull:false,
            default:null,
        },
        user_id: {
            type: dataTypes.INTEGER,
            default:null,
        },
        image: {
            type: dataTypes.STRING(45),
            
        },
        detail:{
            type: dataTypes.STRING(100),
            default: "El artista deja a libre interpretacion esta obra"
        },
        order_id:{
            type: dataTypes.INTEGER,
            default:null
        }
    };

    let config = {
        tableName: "products",
        timestamps: false,
        underscored:true
    }

    const Product = sequelize.define(alias, cols, config);


    Product.associate = function (models){
        Product.belongsTo(models.Categories, {
            as: "productCategory",
            foreignKey: "category_id" 
        })
        Product.belongsTo(models.Orders, {
            as: "productOrder",
            foreignKey: "order_id" 
        })
        Product.belongsTo(models.Users, {
            as: "productUser",
            foreignKey: "user_id" 
        })  
    
    }
    return Product;

}
