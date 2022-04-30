const db = require('../models')

const Company = db.company
const Product = db.product
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

    const totalProduct = await Company.findAll({
        include: {
            model: Product,
            as: 'product'
        },
        where: { id: id }
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







module.exports = {
    addCompany,
    getTotalProduct,
    getTotalUser,
    deleteCompany
}