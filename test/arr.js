// 数组处理

const a1 = ["A", 2, 3]
const a2 = [9, 5, 15]
const f1 = (n) => String(n)
const f2 = (n) => n.toString().padStart(2, "0")
const f3 = () => `[ ${a1.map(f1).join(".")} ] @ ${a2.map(f2).join(":")}`

console.log(f3())

/** 实际代码：标识有新留言的预约单  */

//我的原代码
if (
  appt?.message?.lines.find((line) => {
    return (
      !appt.message.customerLastRead ||
      (line[0] == "staff" && line[2] > appt.message.customerLastRead)
    )
  })
) {
  appt.hasNewMsg = true
}

//她修改过的代码
const lines = appt?.message?.lines.find((line) => {
  return (
    !appt.message.customerLastRead ||
    (line[0] == "staff" && line[2] > appt.message.customerLastRead)
  )
})
if (!!lines) {
  appt.hasNewMsg = true
}
