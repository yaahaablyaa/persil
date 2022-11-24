let body = document.body

// 1
let elem = document.createElement('div')
let imgg = document.createElement('div')
let img = document.createElement('img')
let price = document.createElement('div')
let shtuk = document.createElement('span')
let a = document.createElement('a')
let cost = document.createElement('div')


// 2
elem.classList.add('container')
img.classList.add('img')
imgg.classList.add('imgg')
cost.classList.add('cost')
price.classList.add('price')
shtuk.classList.add('span')

// 3
img.src = "pesil.png"
cost.innerHTML = "79.999"
shtuk.innerHTML = "сум/шт"
a.innerHTML = "Cтиральный порошок Persil"

body.append(elem)
elem.append(imgg, cost, price)
imgg.append(img)
price.append(a)
cost.append(shtuk)