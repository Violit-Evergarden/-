const {pinyin} = require('pinyin-pro')

// console.log(pinyin('施桥远'))

function getNamePinyin(str){
  const pinyinArr = pinyin(str,{toneType:'none',type:'array'})
  return pinyinArr.join('')
}

console.log(getNamePinyin('施桥远'))