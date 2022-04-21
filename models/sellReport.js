module.exports =(sequelize, DataTypes) =>{
    
    const SellReport = sequelize.define("sellreport",{
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateofSell:{
            type: DataTypes.DATE
        },
        quantity:{
            type: DataTypes.INTEGER
        },
        cost:{
            type: DataTypes.INTEGER
        },
        totalCost:{
            type: DataTypes.INTEGER
        },
        soldTo:{
            type: DataTypes.STRING
        },
        sellPrice: {
            type: DataTypes.INTEGER
        }
    })
    return SellReport
}