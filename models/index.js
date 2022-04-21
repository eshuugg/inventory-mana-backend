const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,


    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idel: dbConfig.pool.idel

    }
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected...');
    })
    .catch(err => {
        console.log('Error' + err);
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.product = require('./product.js')(sequelize, DataTypes)
db.suppliers = require('./suppliers.js')(sequelize, DataTypes)
db.stock = require('./stock')(sequelize, DataTypes)
db.sellReport = require('./sellReport')(sequelize, DataTypes)



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!');
    })


// 1 to many relation of suppliers
db.product.hasMany(db.suppliers, {
    foreignKey: 'product_id',
    as: 'supplier'
})

db.suppliers.belongsTo(db.product, {
    foreignKey: 'product_id',
    as: 'product'
})


// 1 to 1 relation of stock
db.product.hasOne(db.stock,{
    foreignKey: 'product_id',
    as:'stock'
})

db.stock.belongsTo(db.product,{
    foreignKey: 'product_id',
    as:'product'
})


//1 to many relation of sell
db.product.hasMany(db.sellReport,{
    foreignKey: 'productId',
    as:'sellReport'
})

db.sellReport.belongsTo(db.product,{
    foreignKey: 'productId',
    as: 'product'
})

module.exports = db