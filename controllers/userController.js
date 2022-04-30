const db = require('../models')
const CryptoJS = require("crypto-js");
// const { BelongsToMany } = require('sequelize/types');


const User = db.user


const addUser = async (req, res) => {

    const { body } = req

    const hashedPass = CryptoJS.AES.encrypt(body.password, 'secret key 123').toString();
    await User.create({
        ...body,
        password: hashedPass,
    })
    res.sendStatus(200)
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id } })
   
    res.sendStatus(200)
}


const loginUser = async (req, res) =>{
    const {body} = req;
    const userInfo = await User.findOne({
        where: {
            email: body.email
        }
    })

    if(userInfo && userInfo.dataValues) {
        console.log(userInfo.dataValues.password);
        const decryptBytes = CryptoJS.AES.decrypt(userInfo.dataValues.password, 'secret key 123');
        console.log(decryptBytes)

        var decryptedPass = decryptBytes.toString(CryptoJS.enc.Utf8);
        console.log(decryptedPass)

        if(decryptedPass === body.password) {
            res.sendStatus(200)
        }
        res.sendStatus(400)
    }
    res.sendStatus(400)
}

module.exports = {
    addUser,
    deleteUser,
    loginUser
}