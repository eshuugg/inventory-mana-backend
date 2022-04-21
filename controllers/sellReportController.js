const db = require('../models')

const SellReport = db.sellReport
const Stock = db.stock
const Product = db.product



const addSellReport = async (req, res) => {

    const { body } = req;


    console.log("------>>>> ", body)
        await SellReport.create({
            ...body
        })
        const stock = await Stock.findOne({
            where: {
                product_id: body.productId
            }
        })
        await Stock.update({
            ...stock,
            quantity: stock.quantity - body.quantity
        }, {
            where: {
                id: stock.id
            }
        })
   
    res.sendStatus(200)

}


const getSellReport = async (req, res) => {

    const id = req.params.id

    const totalSell = await Product.findAll({
        include: [{
            model: SellReport,
            as: 'sellReport'
        }],
        where: { id: id }
    })
    res.status(200).send(totalSell)
}

module.exports = {
    getSellReport,
    addSellReport
}