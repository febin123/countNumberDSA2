function count(num) {
    let count = 0
    while (num > 0) {
        num = Math.floor(num / 10)
        count++
    }
    return count
}
let ans = count(12341212)
console.log(ans)