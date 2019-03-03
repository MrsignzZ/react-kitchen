export default {
  // 字符串转成数组
  toArray(str) {
    return str.split(",")
  },
  // 材料符号转化为文字
  getRealType(arr){
    return arr.map((index) => {
      return {
        ...index,
        type: index.type === '0' ? '配料' : '主材'
      }
    })
  },
  // 随机获取数组元素
  getRandomArrayElements(arr, count) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }
}