const {Sequelize} = require('sequelize')
const sql = require('mysql2')

const sequelize = new Sequelize('portrait','root','sqy@0201',{
  host:'localhost',
  port:'3306',
  dialect:'mysql',
  pool: {
    max: 5, // 连接池的最大连接数量
    min: 0, // 连接池的最小连接数量
    idle: 10000 // 如果一个线程10秒钟内没有被使用，那么就释放线程
  },
  define: {
    timestamps: false //关闭时间戳
  },
  logging: false //禁用日志输出
})

sequelize.sync().then(()=>{
  console.log('All models were synchronized successfully.')
}).catch((err)=>{
  console.log("Error:",err)
})

module.exports = sequelize