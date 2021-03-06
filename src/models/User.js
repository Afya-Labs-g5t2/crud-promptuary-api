const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init ({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        }, {
            sequelize
        })
    } 

    static associate(models) {
        this.hasMany(models.Address, {foreinkey: 'user_id', as: 'enderecos'}); //usuario tem muitos enderecos
    }
}

module.exports = User;