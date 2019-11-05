let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function result(array) {
  let search = document.getElementById('search').value
  array.forEach(function (item) {
    if (item === search) {
      document.getElementById('result').innerHTML = item
    }
    else {
      document.getElementById('result').innerHTML = 'not found'
    }
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

let myDebounce = debounce(result, 1000)
myDebounce()



