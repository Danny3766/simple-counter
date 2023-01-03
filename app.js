// 程式碼寫在這裡
const addBtn = document.querySelector("#plus")
const counterBtn = document.querySelector("#counter")
const decreaseBtn = document.querySelector("#minus")

addBtn.addEventListener("click", () => {
  counter.value = Number(counter.value) + 1
})

decreaseBtn.addEventListener("click", () => {
  if (counter.value > 1) {
    counter.value = Number(counter.value) - 1
  } else {
    return
  }
})