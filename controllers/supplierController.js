const db = require('../models')

//create main Model
const Supplier = db.suppliers

//get all suppliers

const listOfAllSuppliers =  async (req, res) =>{
    let suppliers = await Supplier.findAll()
    res.status(200).send(suppliers)
}



module.exports = {
    listOfAllSuppliers
}