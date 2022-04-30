module.exports = (sequelize, DataTypes) => {

    const Role = sequelize.define("role", {
        role_name: {
            type: DataTypes.STRING
        },
        role_id:{
            type: DataTypes.INTEGER
        }
        
    })
    return Role
}