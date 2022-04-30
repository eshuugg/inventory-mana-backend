module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        productName: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        productType: {
            type: DataTypes.STRING
        },
        company_id: {
            type: DataTypes.INTEGER
        },
        created_by: {
            type: DataTypes.STRING
        }

    })

    return Product
}
