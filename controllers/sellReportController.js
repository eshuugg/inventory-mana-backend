const db = require('../models')

// const SellReport = db.sellReport
const Stock = db.stock
const Product = db.product



const addSellReport = async (req, res) => {

    const { body } = req;


    console.log("------>>>> ", body)
        await SellReport.create({
            ...body
        })
        const stocks = await Stocks.findOne({
            where: {
                product_id: body.product_id
            }
        })
        await Stocks.update({
            ...stocks,
            quantity: stocks.quantity - body.quantity
        }, {
            where: {
                id: stocks.id
            }
        })
   
    res.sendStatus(200)

}


// const getSellReport = async (req, res) => {

//     const id = req.params.id

//     const totalSell = await Product.findAll({
//         include: [{
//             model: SellReport,
//             as: 'sellReport'
//         }],
//         where: { id: id }
//     })
//     res.status(200).send(totalSell)
// }

module.exports = {
    addSellReport
}