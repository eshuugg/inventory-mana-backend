module.exports = (sequelize, DataTypes) => {

    const Stocks = sequelize.define("stocks", {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Stocks
}