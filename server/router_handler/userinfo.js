const Employee = require('../model/employee')


exports.getUserInfo = async (req,res)=>{
  if(!req.user) return res.send({status:1,message:'获取用户信息失败'})
  const {EmployeeID} = req.user
  if(!EmployeeID) return res.send({status:1,message:'获取用户信息失败'})
  const result = await Employee.findOne({where:{EmployeeID}})
  return res.send({
    status:0,
    message:'获取用户信息成功',
    data:result.dataValues
  })
}


exports.updateUserInfo = async (req,res)=>{}