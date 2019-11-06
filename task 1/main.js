let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function search(array) {
  let button = document.getElementById('button')
  button.addEventListener("click", () => {
    let search = document.getElementById('search')
    let result = array.find((item) => item == search.value)
    document.getElementById('result').innerHTML = result
  })
}

function debounce(f, ms) {
  let isCooldown = false
  return function () {
    if (isCooldown) return
    f.apply(this, arguments)
    isCooldown = true
    setTimeout(() => isCooldown = false, ms)
  }
}

window.onload = function () {
  array.forEach(function (item) {
    document.getElementById('elemOfArrays').innerHTML += '<li>' + item + '</li>'
  })
}

let result = debounce(search, 1000)
result(array)






