// 1.`byteSize`：返回字符串的字节长度
const byteSize = str => new Blob([str]).size;
byteSize('😀'); // 4
byteSize('Hello World'); // 11

// 2. `capitalize`：首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'

// 3. `capitalizeEveryWord`：每个单词首字母大写
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalizeEveryWord('hello world!'); // 'Hello World!'

// 4. `decapitalize`：首字母小写
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('')
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'

/**
 * 5. `luhnCheck`：银行卡号码校验（`luhn`算法）
 * Luhn算法的实现，用于验证各种标识号，例如信用卡号，IMEI号，国家提供商标识号等。
 * 与String.prototype.split('')结合使用，以获取数字数组。获得最后一个数字。实施luhn算法。如果被整除，则返回，否则返回
 * 
 * 补充：银行卡号码的校验规则：
 * 银行卡号码的校验采用Luhn算法，校验过程大致如下：
 * 从右到左给卡号字符串编号，最右边第一位是1，最右边第二位是2，最右边第三位是3….
 * 从右向左遍历，对每一位字符t执行第三个步骤，并将每一位的计算结果相加得到一个数s。
 * 对每一位的计算规则：如果这一位是奇数位，则返回t本身，如果是偶数位，则先将t乘以2得到一个数n，如果n是一位数（小于10），直接返回n，否则将n的个位数和十位数相加返回。
 * 如果s能够整除10，则此号码有效，否则号码无效。
 * 因为最终的结果会对10取余来判断是否能够整除10，所以又叫做模10算法。
 * 当然，还是库比较香: bankcardinfo
 */
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
luhnCheck('4485275742308327'); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false

// 6. `splitLines`：将多行字符串拆分为行数组。 使用String.prototype.split()和正则表达式匹配换行符并创建一个数组。
const splitLines = str => str.split(/\r?\n/);
splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
