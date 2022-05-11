const db = require('../models')


const Company = db.company
const Product = db.product
const Supplier = db.suppliers
const SellReport = db.sellReport
const Stocks = db.stocks
const User = db.user
const Role = db.role


// create company

const addCompany = async (req, res) => {

    const { body } = req;

    await Company.create({
        ...body
    })
    res.sendStatus(200)
}

const deleteCompany = async (req, res) => {
    const id = req.params.id

    await Company.destroy({ where: { id: id } })

    res.sendStatus(200)
}

const getTotalProduct = async (req, res) => {

    const id = req.params.id

    const totalProduct = await Product.findAll({
        include: [{
            model: Supplier,
            as: 'supplier',
        }],
        where: { company_id: id }
    })
    res.status(200).send(totalProduct)
}



const getTotalUser = async (req, res) => {

    const id = req.params.id

    const totalUser = await Company.findOne({
        include: {
            model: User,
            as: 'user',
            include: {
                model: Role,
                as: 'role',
            },
            attributes: {
                exclude: ['password']
            }
        },
        where: { id: id }
    })
    res.status(200).send(totalUser)
}




const getTotalProductInfo = async (req, res) => {

    const { company_id, id } = req.params

    const totalProduct = await Product.findOne({

        include: [{
            model: Supplier,
            as: 'supplier',
        }, {
            model: SellReport,
            as: 'sellReport',
        }, {
            model: Stocks,
            as: 'stocks',
        }],
        where: {
            id: id,
            company_id: company_id
        }

    })
    res.status(200).send(totalProduct)
}




module.exports = {
    addCompany,
    getTotalProduct,
    getTotalUser,
    getTotalProductInfo,
    deleteCompany
}