module.exports = (sequelize, DataTypes) => {

    const Supplier = sequelize.define("supplier", {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        supplierName: {
            type: DataTypes.STRING
        },
        supplyDate: {
            type: DataTypes.DATE
        },
        rate: {
            type: DataTypes.FLOAT
        },
        tax: {
            type: DataTypes.FLOAT
        },
        totalCost: {
            type: DataTypes.FLOAT
        },
        invoice_no: {
            type: DataTypes.INTEGER
        }
    })
    return Supplier
}   