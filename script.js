const pushButton = document.getElementById("push")
const popButton = document.getElementById("pop")
const firstArr = document.getElementById("first-array")
const secondArr = document.getElementById("second-array")

let firstArray = [1, 2, 3, 4]
let secondArray = [5, 6, 7, 8]

pushButton.addEventListener("click",() => {
    removeItems()
    secondArray.unshift(firstArray.shift())
    firstArray.push(secondArray.pop())
    render()
})

popButton.addEventListener("click",() => {
    removeItems()
    firstArray.unshift(secondArray.shift())
    secondArray.push(firstArray.pop())
    render()
})

function render() {
    firstArray.forEach((num) => {
        const arrayItem = document.createElement("div")
        arrayItem.classList.add("array-item")
        arrayItem.textContent = num
        firstArr.appendChild(arrayItem)
    })
    secondArray.forEach((num) => {
        const arrayItem = document.createElement("div")
        arrayItem.textContent = num
        arrayItem.classList.add("array-item")
        secondArr.appendChild(arrayItem)
    })
}

render()

function removeItems() {
    firstArr.innerHTML = ""
    secondArr.innerHTML = ""
}