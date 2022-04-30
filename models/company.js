module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define("company", {
        company_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        }
    })
    return Company
}