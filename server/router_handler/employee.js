const Employee = require('../model/employee')
const {removeEmptyValues,getNamePinyin} = require('../utils')

exports.addEmployee = async (req,res) => {
  const {EmployeeID='',Name='',Department='未知',Position='未知',Email='无',HireDate='未知',PhoneNumber='未知'} = req.body
  if(!EmployeeID || !Name) return res.send({ status: 1, message: "员工数据缺失" })
  const repeater = await Employee.findAll({where:{EmployeeID}})
  if(repeater.length>=1) return res.send({ status: 1, message: "员工ID重复" })
  const NamePinyin = getNamePinyin(Name)
  const Avator = 'http://127.0.0.1:3007/assets/avator/default.png'
  const newEmployee = await Employee.create({EmployeeID,Name,Department,Position,Email,HireDate,PhoneNumber,NamePinyin,Avator})
  res.send({status:0,message:'添加成功',data:newEmployee})
}

exports.deleteEmployee = async (req,res) => {
  const {EmployeeID} = req.body
  if(!EmployeeID) return res.send({status:1,message:'需要参数员工ID'})
  const result = await Employee.destroy({where:{EmployeeID}})
  if(result===0) return res.send({status:1,message:"未找到对应员工数据"})
  res.send({status:0,message:"删除成功"})
}

exports.editEmployee = async (req,res) => {
  const updateEmployeeInfo = req.body
  const {EmployeeID} = updateEmployeeInfo
  delete updateEmployeeInfo[EmployeeID]
  if(!EmployeeID) return res.send({ status: 1, message: "员工ID数据缺失" })
  updateEmployeeInfo.NamePinyin = getNamePinyin(updateEmployeeInfo.Name)
  const result = await Employee.update(updateEmployeeInfo,{where:{EmployeeID}})
  if(result[0]===1) return res.send({status:0,message:"修改成功"})
  return res.send({status:1,message:"修改失败"})
}

exports.getEmployee = async (req,res) => {
  const allEmployee = await Employee.findAll()
  return res.send({status:0,message:"获取员工信息",data:allEmployee})
}