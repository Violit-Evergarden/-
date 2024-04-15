const sequelize = require('../db')
const {Model,DataTypes} = require('sequelize')

const Employee = sequelize.define('Employee',{
  EmployeeID:{type:DataTypes.STRING,allowNull:false,unique:true},
  Name:{type:DataTypes.STRING},
  Department:{type:DataTypes.STRING},
  Position:{type:DataTypes.STRING},
  Email:{type:DataTypes.STRING},
  HireDate:{type:DataTypes.DATE},
  PhoneNumber:{type:DataTypes.STRING},
  NamePinyin:{type:DataTypes.STRING},
  Avator:{type:DataTypes.STRING},
  Signature:{type:DataTypes.STRING},
  Labels:{type:DataTypes.STRING},
  Nickname:{type:DataTypes.STRING},
  Birthday:{type:DataTypes.DATE},
  Home:{type:DataTypes.STRING},
},{freezeTableName:true})

module.exports = Employee