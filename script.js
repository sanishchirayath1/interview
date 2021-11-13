const pushButton = document.getElementById("push")
const popButton = document.getElementById("pop")

let firstArray = [1, 2, 3, 4]
let secondArray = [5, 6, 7, 8]

pushButton.addEventListener("click",() => {
    secondArray.unshift(firstArray.shift())
})

popButton.addEventListener("click",() => {
    firstArray.push(secondArray.pop())
})

