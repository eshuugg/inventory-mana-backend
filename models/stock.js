module.exports = (sequelize, DataTypes) => {

    const Stock = sequelize.define("stock", {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Stock
}