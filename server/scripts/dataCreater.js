
// const config = {
//   服务产品部:['部门主任','技术评估专员','知识产权专员','科技培育专员','研究专员','外勤专员'],
//   战略规划部:['部门主任','战略分析师','政策顾问','项目评估专员','数据分析师'],
//   平台建设部:['部门主任','运营经理','技术支持工程师','市场对接专员','活动策划专员'],
//   市场发展部:['部门主任','科技评估专员','资源开发专员','企业档案管理员','高级技术交易员'],
//   办公室:['人力资源管理','财务管理','行政支持','IT支持']
// }

const Employee = require('../model/employee')
const {getNamePinyin} = require('../utils')


function getRandomName(){
  const len = Math.random()>0.5?2:3
  function randomAccess(min,max){
    return Math.floor(Math.random() * (min - max) + max)
  }
  let name = ""
  for(let i = 0;i<len;i++){
    name += String.fromCharCode(randomAccess(0x4E00,0x9FA5))
  }
  return name
}

function getRandomDepartment(){
  const config = ['服务产品部','战略规划部','平台建设部','市场发展部','办公室']
  const randIndex = Math.floor(Math.random()*config.length)
  return config[randIndex]
}

function getRandomDate(minYear,maxYear){
  const randY = Math.floor((maxYear-minYear+1)*Math.random())+minYear
  const randM = Math.floor(12*Math.random())+1
  const randD = Math.floor(30*Math.random())+1
  return `${randY}-${randM}-${randD}`
}

function getRandomPosi(depart){
  const config = {
    服务产品部:['部门主任','技术评估专员','知识产权专员','科技培育专员','研究专员','外勤专员'],
    战略规划部:['部门主任','战略分析师','政策顾问','项目评估专员','数据分析师'],
    平台建设部:['部门主任','运营经理','技术支持工程师','市场对接专员','活动策划专员'],
    市场发展部:['部门主任','科技评估专员','资源开发专员','企业档案管理员','高级技术交易员'],
    办公室:['人力资源管理','财务管理','行政支持','IT支持']
  }
  const positions = config[depart]
  const randIndex = Math.floor(Math.random()*positions.length)
  return positions[randIndex]
}

function getRandMoble() {
  var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
  var i = parseInt(10 * Math.random());
  var prefix = prefixArray[i];
  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix;
}

function getRandEmail(){
  const email_suffix = [
    "@gmail.com", "@yahoo.com", "@msn.com", "@hotmail.com", "@aol.com", 
    "@ask.com","@live.com", "@qq.com", "@0355.net", "@163.com", "@163.net",
    "@263.net", "@3721.net", "@yeah.net", "@126.com", "@sina.com",
    "@sohu.com", "@yahoo.com.cn"
  ]
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const elen = Math.floor(Math.random()*7)+4
  let eStr = ''
  for(let i=0;i<=elen;i++){
    eStr+=str[Math.floor(str.length*Math.random())]
  }
  const esuffix = email_suffix[Math.floor(email_suffix.length*Math.random())]
  return eStr+esuffix
}

function createEmployee(){
  const Name = getRandomName()
  const Department = getRandomDepartment()
  const Position = getRandomPosi(Department)
  const Email = getRandEmail()
  const HireDate = getRandomDate(2000,2024)
  const PhoneNumber = getRandMoble()
  const NamePinyin = getNamePinyin(Name)
  const Avator = 'http://127.0.0.1:3007/assets/avator/default.png'
  const Gender = Math.random()>0.5?'男':"女"
  const SystemRights = 0
  const employee = {
    Name,
    Department,
    Position,
    Email,
    HireDate,
    PhoneNumber,
    NamePinyin,
    Avator,
    Gender,
    SystemRights
  }
  return employee
}

async function EmployeeCreater(){
  for(let i=0;i<100;i++){
    const employee = createEmployee()
    employee.EmployeeID = 10000000+i
    Employee.create(employee)
  }
  Employee.create({
    EmployeeID:10000100,
    Name:'施桥远',
    Department:'市场发展部',
    Position:'高级技术交易员',
    Email:'2232102177@qq.com',
    HireDate:'2024-4-18',
    PhoneNumber:'17762984593',
    NamePinyin:getNamePinyin('施桥远'),
    Avator:'http://127.0.0.1:3007/assets/avator/default.png',
    Gender:'男',
    SystemRights:10
  })
}

async function EmployeeDeleter(){
  const result = await Employee.destroy({
    where: {},
    truncate: true
  })
  console.log(result)
}

EmployeeCreater()
// EmployeeDeleter()
