module.exports = ((sequelize,dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        avatar: {
            type: dataTypes.STRING,
            defaultValue: 'default-image2.png'
        },
        password:{
            type: dataTypes.STRING
        },
    };
 
    let config = {
        tableName: "users",
        timestamps: false
    }
 
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models){
        User.hasMany(models.Products, {
            as: "userProducts",
            foreignKey: "user_id"
        });
        User.hasMany(models.Cart, {
            as: "userCart",
            foreignKey: "user_id"
        });

    }
    return User;
    }
)

