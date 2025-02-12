// 数组处理

const a1 = ["A", 2, 3]
const a2 = [9, 5, 15]
const f1 = (n) => String(n)
const f2 = (n) => n.toString().padStart(2, "0")
const f3 = () => `[ ${a1.map(f1).join(".")} ] @ ${a2.map(f2).join(":")}`

console.log(f3())
