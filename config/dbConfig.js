module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Almetric@123',
    DB: 'node_inventory_api_db',
    dialect: 'mysql',

    pool: {
        max: 5,
        miz: 0,
        acquire: 30000,
        idel: 10000
    }
}