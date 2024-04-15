
export function deepClone(obj){
  if(typeof obj !== 'object' && typeof obj !== 'function' || obj === null) return obj
  const newObj = Array.isArray(obj)?[]:{}
  for(const key of Reflect.ownKeys(obj)){
    newObj[key]=deepClone(obj[key])
  }
  return newObj
}

export function isSameObj(obj1,obj2){
  if(Object.keys(obj1).length!==Object.keys(obj2).length) return false
  for(const key of Object.keys(obj1)){
    if(obj1[key]!==obj2[key]) return false
  }
  return true
}

export function getNamePinyin(str){
  const pinyinArr = pinyin(str,{toneType:'none',type:'array'})
  return pinyinArr.join('')
}

export function getTimeState(){
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前小时
  let hours = timeNow.getHours();
  // 设置默认文字
  let state= ``;
  // 判断当前时间段
  if (hours >= 0 && hours <= 10) {
      state = `早上好!`;
  } else if (hours > 10 && hours <= 14) {
      state= `中午好!`;
  } else if (hours > 14 && hours <= 18) {
      state= `下午好!`;
  } else if (hours > 18 && hours <= 24) {
      state= `晚上好!`;
  }
  return state;
}

export function isEmptyObj(obj){
  return Object.keys(obj).length === 0
}
