const { company } = require('../models')
const db = require('../models')
// const Op = Sequelize.Op;
// const { Sequelize, DataTypes } = require('sequelize');

//create main Model

const Product = db.product
const Supplier = db.suppliers
const Stocks = db.stocks
const SellReport = db.sellReport
//main work

//create inventory  

const addProduct = async (req, res) => {

    const { product, supplier } = req.body;

    if (product?.id) {
        await Supplier.create({
            ...supplier,
            product_id: product.id
        })
        const stocks = await Stocks.findOne({
            where: {
                product_id: product.id
            }
        })
        await Stocks.update({
            ...stocks,
            quantity: stocks.quantity + supplier.quantity
        }, {
            where: {
                id: stocks.id
            }
        })

    } else {
        const resProduct = await Product.create(product)

        await Supplier.create({
            ...supplier,
            product_id: resProduct.dataValues.id
        })

        await Stocks.create({
            quantity: supplier.quantity,
            product_id: resProduct.dataValues.id
        })

    }
    res.sendStatus(200)
}

//get all products




const deleteProduct = async (req, res) => {
    const id = req.params.id

    await Product.destroy({ where: { id: id } })

    res.sendStatus(200)
}




// connect one to many relation Inventories and Suppliers

// const getProductSuppliers = async (req, res) => {

//     const id = req.params.company_id

//     const data = await Product.findAll({
//         include: {
//             model: Supplier,
//             as: 'supplier',
//         },

//         where: { company_id: id }
//     })
//     res.status(200).send(data)
// }

const getTotalStock = async (req, res) => {

    const id = req.params.id

    const totalStock = await Product.findOne({
        include: {
            model: Stocks,
            as: 'stocks'
        },
        where: { id: id }
    })
    res.status(200).send(totalStock)
}


const getSellReport = async (req, res) => {

    const id = req.params.id

    const totalSell = await Product.findOne({
        include: [{
            model: SellReport,
            as: 'sellReport'
        }],
        where: { id: id }
    })
    res.status(200).send(totalSell)
}




//Search 
// app.get('/search', (req, res) => {
//     const { name } = req.query;

//     product.findAll({ where: { suppliers: { [Op.like]: '%' + name + '%' } } })
//         .then(products => res.render('products', { products }))
//         .catch(err => console.log(err));
// })


module.exports = {
    addProduct,
    getTotalStock,
    getSellReport,
    deleteProduct
}
