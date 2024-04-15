const fs = require('fs')
const {pinyin} = require('pinyin-pro')

exports.saveBase64Img = function (str,path,name){
  return new Promise((resolve,reject)=>{
    const data = str.replace(/^data:image\/\w+;base64,/, "")
    const bufferData =  Buffer.from(data,'base64')
    fs.writeFile(`${path}/${name}.png`,bufferData,err => {
      if(err) {
        console.log(err)
        reject(err)
      }else {
        resolve(name)
      }
    })
  })
}

exports.removeEmptyValues=function(obj){
  for(const key of Object.keys(obj)){
    if(!obj[key]) delete obj[key]
  }
  return obj
}

exports.getNamePinyin=function(str){
  const pinyinArr = pinyin(str,{toneType:'none',type:'array'})
  return pinyinArr.join('')
}