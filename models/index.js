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
db.stocks = require('./stocks')(sequelize, DataTypes)
db.sellReport = require('./sellReport')(sequelize, DataTypes)
db.company = require('./company')(sequelize, DataTypes)
db.user = require('./user')(sequelize, DataTypes)
db.role = require('./role')(sequelize, DataTypes)



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!');
    })


// 1 to many relation of suppliers and product
db.product.hasMany(db.suppliers, {
    foreignKey: 'product_id',
    as: 'supplier'
})

db.suppliers.belongsTo(db.product, {
    foreignKey: 'product_id',
    as: 'product'
})


// 1 to 1 relation of stock and product
db.product.hasOne(db.stocks, {
    foreignKey: 'product_id',
    as: 'stocks'
})

db.stocks.belongsTo(db.product, {
    foreignKey: 'product_id',
    as: 'product'
})


//1 to many relation of product and sellreport
db.product.hasMany(db.sellReport, {
    foreignKey: 'product_id',
    as: 'sellReport'
})

db.sellReport.belongsTo(db.product, {
    foreignKey: 'product_id',
    as: 'product'
})

//1 To many relation between company and product
db.company.hasMany(db.product, {
    foreignKey: 'company_id',
    as: 'product'
})

db.product.belongsTo(db.company, {
    foreignKey: 'company_id',
    as: 'company'
})

// 1 to many relation  between company and user 
db.company.hasMany(db.user, {
    foreignKey: 'company_id',
    as: 'user'
})

db.user.belongsTo(db.company, {
    foreignKey: 'company_id',
    as: 'company'
})

//1 to many relation between role and user
db.role.hasMany(db.user, {
    foreignKey: 'role_id',
    as: 'user'
})

db.user.belongsTo(db.role, {
    foreignKey: 'role_id',
    as: 'role'
})
module.exports = db