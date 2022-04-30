const db = require('../models')

const Role = db.role
const User = db.user


const addrole = async (req, res) => {

    const { body } = req

    await Role.create({
        ...body
    })
    res.sendStatus(200)
}

const getUserRole = async (req, res) => {

    // const id = req.params.id

    const userRole = await Role.findAll({
        include: {
            model: User,
            as: 'user'
        },
        // where: { id: id }
    })
    res.status(200).send(userRole)
}


module.exports ={
    addrole,
    getUserRole
}
