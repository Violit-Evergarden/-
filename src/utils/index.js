
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