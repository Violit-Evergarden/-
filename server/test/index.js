const {pinyin} = require('pinyin-pro')
const path = require('path')

// console.log(pinyin('施桥远'))

function getNamePinyin(str){
  const pinyinArr = pinyin(str,{toneType:'none',type:'array'})
  return pinyinArr.join('')
}

console.log(path.join(__dirname,'../assets/avator'))