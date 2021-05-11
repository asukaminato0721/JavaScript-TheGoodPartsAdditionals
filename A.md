# 附录 A

## 作用域

用 `{ }`

## 自动插入分号

用合格的 IDE/编辑器，多用格式化就能避免

## 保留字

去翻标准

## NaN

新引入了 `Object.is()`

解决了 `+0` `-0` `NaN` 判断相等的问题

```js
//@ts-check
console.log(Object.is(NaN, NaN));
console.log(isNaN(NaN));
console.log(Object.is(-0, +0));
console.log(-0 === +0);
```
