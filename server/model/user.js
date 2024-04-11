const sequelize = require('../db')
const {Model,DataTypes} = require('sequelize')

const User = sequelize.define('User',{
  username:{type:DataTypes.STRING,allowNull:false,unique:true},
  password:{type:DataTypes.STRING},
  avator:{type:DataTypes.STRING}
},{freezeTableName: true})

module.exports = User
