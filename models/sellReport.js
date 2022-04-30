module.exports = (sequelize, DataTypes) => {

    const SellReport = sequelize.define("sellreport", {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateofSell: {
            type: DataTypes.DATE
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        cost: {
            type: DataTypes.INTEGER
        },
        totalCost: {
            type: DataTypes.INTEGER
        },
        soldTo: {
            type: DataTypes.STRING
        },
        sellPrice: {
            type: DataTypes.INTEGER
        },
        created_by: {
            type: DataTypes.STRING
        },
        invoice_no: {
            type: DataTypes.INTEGER
        }
    })
    return SellReport
}