const User = require("../model/user");
const jwt = require("jsonwebtoken");
const config = require("../config");
const bcript = require('bcryptjs')

exports.register = async (req, res) => {
  const userInfo = req.body;
  const { username, password } = userInfo;
  if (!username || !password)
    return res.send({ status: 1, message: "用户名与密码不能为空" });
  const repeater = await User.findAll({ where: { username } });
  if (repeater.length >= 1)
    return res.send({ status: 1, message: "用户名已被占用" });
  bcriptPassword = bcript.hashSync(password,10)
  const newUser = await User.create({ 
    username,
    password:bcriptPassword,
    avator:'http://127.0.0.1:3007/assets/avator/default.png'
  });
  res.send({ status: 0, message: "注册成功" });
};

exports.login = async (req, res) => {
  const userInfo = req.body;
  const { username = "", password = "" } = userInfo;
  const user = await User.findAll({ where: { username } });
  if (user.length === 0)
    return res.send({ status: 1, message: "用户名或密码错误" });
  const compareResult = bcript.compareSync(password,user[0].dataValues.password)
  if(!compareResult) return res.send({ status: 1, message: "用户名或密码错误" });
  //生成token字符串
  const tokenStr = jwt.sign(
    { ...user[0].dataValues, password: "" },
    config.jwtSecretKey,
    { expiresIn: config.expiresIn }
  );
  return res.send({
    status: 0,
    message: "登录成功",
    token: "Bearer " + tokenStr,
  });
};
