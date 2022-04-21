const db = require('../models')


const Stock = db.stock

const listOfAllStock = async (req,res) =>{
    let stock = await Stock.findAll()
    res.status(200).send(stock)
}

module.exports ={
    listOfAllStock    
}