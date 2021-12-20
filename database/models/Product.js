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
            default:null,
            /*references: {
                model: Category,
                key: 'id',
            }*/
        },
        user_id: {
            type: dataTypes.INTEGER,
            default:null,
            /*references: {
                model: User,
                key: 'id'
            }*/
        },
        image_id: {
            type: dataTypes.INTEGER,
            default:null,
            /*references: {
                model: Images,
                key: 'id'
            }*/
        }
    };

    let config = {
        tableName: "products",
        timestamps: false,
        underscored:true
    }

    const Product = sequelize.define(alias, cols, config);


    Product.associate = function (models){
        /*Product.belongsTo(models.Images, {
            as: "productImage",
            foreignKey: "image_id" 
        })
        Product.belongsTo(models.Categories, {
            as: "productCategory",
            foreignKey: "category_id" 
        })
        Product.belongsTo(models.Users, {
            as: "productUser",
            foreignKey: "user_id" 
        })
        
        Order.belongsTo(models.Orders, {
            as: "productOrder",
            foreignKey: "order_id" 
        })*/

    
    }
    return Product;

}
