
/**
 * 检测字符串是否为空
 * @method isEmpty
 * @param {String} str 被处理字符串
 * @returns {Boolean} 期望布尔值
 */
// eslint-disable-next-line import/prefer-default-export
export const isEmpty = (str: string): boolean => {
  if (str === '' || str == null) {
    return true
  } else {
    return false
  }
}

/**
 * 
 * @param arg 
 */
// export const identity = <T>(arg: T[]): T[] => {
//   console.log(arg.length)
//   return arg
// }

// let oupt = identity<number>([111])
// function identity<T>(arg: T): T {
//   return arg;
// }
// let myIdentity: { <T>(arg: T): T } = identity
// console.log(myIdentity)

interface GenericIdentityFn<T> {
  (arg: T): T;
}
function identity<T>(arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn<number> = identity
console.log(myIdentity)