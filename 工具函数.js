/**
 * 工具函数
 */

/******************* */
/** 1. 第一部分：数组 */
/******************* */

// 1. `all`：布尔全等判断
const all = (arr, fn = Boolean) => arr.every(fn);

// 2. `allEqual`：检查数组各项相等
const allEqual = arr => arr.every(val => val === arr[0]);

// 3.`approximatelyEqual`：约等于
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

// 4.`arrayToCSV`：数组转`CSV`格式（带空格的字符串）
const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

// 5.`arrayToHtmlList`：数组转`li`列表
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();

// 6. `average`：平均数
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

// 7. `averageBy`：数组对象属性平均数
const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;

// 8.`bifurcate`：拆分断言后的数组
const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

// 9. `castArray`：其它类型转数组
const castArray = val => (Array.isArray(val) ? val : [val]);

// 10. `compact`：去除数组中的无效/无用值
const compact = arr => arr.filter(Boolean);

// 11. `countOccurrences`：检测数值出现次数
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 12. `deepFlatten`：递归扁平化数组
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 13. `difference`：寻找差异
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

// 14. `differenceBy`：先执行再寻找差异
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

// 15. `dropWhile`：删除不符合条件的值
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

// 16. `flatten`：指定深度扁平化数组
const flatten = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

// 17. `indexOfAll`：返回数组中某值的所有索引
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
