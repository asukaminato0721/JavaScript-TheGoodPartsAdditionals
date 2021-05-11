obj = [1, 2, 3];
let arr1 = Array.from(obj);
let arr2 = [...obj];
console.log([arr1, arr2]);
for (const [index, e] of arr1.entries()) {
  console.log([index, e]);
}
Array.isArray(arr1);
{
  const data = [4, 8, 15, 16, 23, 42];
  const add = (a, b) => a + b;
  const mult = (a, b) => a * b;
  const sum = data.reduce(add);
  console.log(sum);
  const product = data.reduce(mult);
  console.log(product);
}
{
  let zeros = Array(10).fill(0);
  console.log(zeros);
  let zeross = Array(10)
    .fill(0)
    .map((_) => Array(10).fill(0));
  zeross[0][0] = 1;
  console.log(zeross);
}
