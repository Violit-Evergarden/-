const Employee = require('../model/employee')


exports.getUserInfo = async (req,res)=>{
  if(!req.user) return res.send({status:1,message:'获取用户信息失败'})
  return res.send({
    status:0,
    message:'获取用户信息成功',
    data:req.user
  })
}


exports.updateUserInfo = async (req,res)=>{}