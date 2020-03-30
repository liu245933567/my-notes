# 我展示的是一级标题

## 我展示的是二级标题

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

_斜体文本_
**粗体文本**
**_粗斜体文本_**

---

RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~

<u>带下划线文本</u>
创建脚注格式类似这样 [^runoob]。

[^runoob]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！

- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项

- 第一项
- 第二项
- 第三项

1. 第一项
2. 第二项
3. 第三项

4. 第一项：
   - 第一项嵌套的第一个元素
   - 第一项嵌套的第二个元素
5. 第二项：
   - 第二项嵌套的第一个元素
   - 第二项嵌套的第二个元素

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

https://github.com - 自动生成！
[GitHub](https://github.com)

正如 Kanye West 所说：

> We're living the future so
> the present is our past.

我觉得你应该在这里使用
`<addr>` 才对。

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```javascript {.class1 .class}
function add(x, y) {
  return x + y
}
```

```javascript {.line-numbers}
function add(x, y) {
  return x + y
}
```

```javascript {highlight=1}
function add(x, y) {
  return x + y
}
```

```javascript {highlight=10-20}

```

```javascript {highlight=[1-10,15,20-22]}

```

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

:smile:
:fa-car:

30^th^

colspan `>` or `empty cell`
| a | b |
|---|---|
| > | 1 |
| 2 || 

Content [^1]
[^1]: Hi! This is a footnote

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.

==marked==