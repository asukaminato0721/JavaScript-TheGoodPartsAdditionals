//@ts-check
const s = [
  {
    first: "Joe",
    last: "Besser",
  },
  {
    first: "Moe",
    last: "Howard",
  },
  {
    first: "Joe",
    last: "DeRita",
  },
];
let ss = s.slice();
ss.sort((a, b) => (a.first > b.first ? 1 : -1));
console.log(ss);
