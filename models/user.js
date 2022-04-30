module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER
        },
        user_name: {
            type: DataTypes.STRING,
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        },
        role_id: {
            type: DataTypes.INTEGER
        },
        company_id: {
            type: DataTypes.INTEGER
        }
    })
    return User
}