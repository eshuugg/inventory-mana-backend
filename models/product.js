module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        productName: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        productType: {
            type: DataTypes.STRING
        },
       
    })

    return Product
}
