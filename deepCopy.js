//方式一：这种简单粗暴的方法有其局限性。 当值为undefined、function、 symbol 会在转换过程中被忽略
var syb = Symbol('obj');
var person = {
  name: 'tino',
  say: function() {
    console.log('hi');
  },
  ok: syb,
  un: undefined
}
var copy = JSON.parse(JSON.stringify(person))

//方式二：直接写个方法
function deepCopy(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key]); //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}