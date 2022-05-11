const db = require('../models')


const Stocks = db.stocks

const listOfAllStock = async (req, res) => {
    
    const id = req.params.id

    const totalStocks = await Product.findOne({
        include: [{
            model: Stocks,
            as: 'stocks'
        }],
        where: { id: id }
    })
    res.status(200).send(totalStocks)
}

module.exports = {
    listOfAllStock
}