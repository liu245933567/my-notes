const list = [{
  id: 0,
  name: '喜羊羊',
  amount: 92
}, {
  id: 1,
  name: '慢羊羊',
  amount: 124
}, {
  id: 2,
  name: '美羊羊',
  amount: 88
}, {
  id: 3,
  name: '沸羊羊',
  amount: 98
}, {
  id: 4,
  name: '暖羊羊',
  amount: 65
}, {
  id: 5,
  name: '懒羊羊',
  amount: 98
}];

//遍历可能事件
const result = () => {
  let r = [];
  list.forEach(i => {
    list.forEach(j => {
      i.id !== j.id && r.push(`${i.id}-${j.id}`)
    })
  })
  return r;
}

//格式化数组内容
const str = result().map(i => {
  let k = i.split('-'), f, l;
  if (Number(k[0]) < Number(k[1])) {
    f = k[0];
    l = k[1];
  } else {
    f = k[1];
    l = k[0];
  }
  return `${f}-${l}`
});

//数组去重
const newStrArr = [...new Set(str)];

//功能：将浮点数四舍五入，取小数点后2位 
function toDecimal(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return;
  }
  f = Math.round(x * 100) / 100;
  return f;
}

//得到最终结果
const getResult = () => {
  let resulArr = [];
  newStrArr.forEach(i => {
    const iArr = i.split('-'),
      firstOne = list[Number(iArr[0])],
      secondOne = list[Number(iArr[1])],
      listLength = list.length,
      fName = firstOne.name,
      sName = secondOne.name,
      f_s = toDecimal(secondOne.amount / listLength),
      s_f = toDecimal(firstOne.amount / listLength),
      content = f_s > s_f 
        ? `${fName} 应转给 ${sName} ${f_s - s_f} 元` 
          : f_s === s_f 
            ? null
            : `${sName} 应转给 ${fName} ${f_s - s_f} 元`;
    content && resulArr.push(content);
  })
  return resulArr;
}