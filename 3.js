//@ts-check
let obj = {
  a: false,
  b: [],
  c: "",
  d: 0,
};
for (const e in obj) {
  console.log(obj[e]);
  console.log(obj[e] ?? "unknown");
  console.log(obj[e] || "unknown");
  console.log("-----");
}
