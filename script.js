var qtd = document.querySelector('#qtd')
var price = document.querySelector('#span-left')
var res = document.querySelector('#res')
var cart = document.querySelector('#number-cart')
var unidade = document.querySelector('#unidade')
var displaySpan = document.querySelector('#div-span-pop-up')
var displayPopUp = document.querySelector('#preço-final')


// Miltiplicação Quantidade produto
var btn = document.querySelector('#btn-to-cart')
btn.addEventListener('click', tocart)

function tocart() {  

  var qtdFinal = qtd.value

  price = 125.00

  if (qtdFinal == 0){
    window.alert('Quantidade invalida')
  } else {
    res.innerText = qtdFinal * price
    cart.innerText = qtdFinal
    unidade.innerText = qtdFinal
  }

  if (qtdFinal >= 1) {
    cart.style.display = 'block'
  }

  if (qtdFinal > 0) {
    displaySpan.style.display = 'none'
    displayPopUp.style.display = 'block'
  }
}

// Chamar popUP
var btncart = document.querySelector('#header-cart')
var popUP = document.querySelector('#pop-up')
btncart.addEventListener('click', abrirpopup)

function abrirpopup() {
  corpo.style.display = 'flex' 
  popUP.style.display = 'block' 
  previmg.style.display = 'none'
  nextimg.style.display = 'none'
}

// Fechar popUP
var corpo = document.querySelector('#container')
corpo.addEventListener('click', fecharpopup)

function fecharpopup() {
  popUP.style.display = 'none'
  previmg.style.display = 'block'
  nextimg.style.display = 'block'
}

// Alteração Imagem 
var imgP1 = document.querySelector('img.img-menor')
var imgP2 = document.querySelector('img.img-menor2')
var imgP3 = document.querySelector('img.img-menor3')
var imgP4 = document.querySelector('img.img-menor4')

var img = document.querySelector('#img-principal')
var img2 = document.querySelector('#img-principal2') 
var img3 = document.querySelector('#img-principal3') 
var img4 = document.querySelector('#img-principal4') 

imgP1.addEventListener('click', click1)
function click1() {
  img.style.display = 'block'
  img2.style.display = 'none'
  img3.style.display = 'none'
  img4.style.display = 'none'
}

imgP2.addEventListener('click', click2)
function click2() {
  img.style.display = 'none'
  img2.style.display = 'block'
  img3.style.display = 'none'
  img4.style.display = 'none'
}

imgP3.addEventListener('click', click3)
function click3() {
  img.style.display = 'none'
  img2.style.display = 'none'
  img3.style.display = 'block'
  img4.style.display = 'none'
}

imgP4.addEventListener('click', click4)
function click4() {
  img.style.display = 'none'
  img2.style.display = 'none'
  img3.style.display = 'none'
  img4.style.display = 'block'
}

// Troca de imagem mobile
var previmg = document.querySelector('#anterior')
var nextimg = document.querySelector('#proximo')
var sliderImg = document.querySelector('#img-principal')
var images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg']
var i = 0;

previmg.addEventListener('click', prev)
function prev() {
  if (i <= 0 ) i = images.length
  i--
  return setImg()
}

nextimg.addEventListener('click', next)
function  next() {
  if(i >= images.length-1) i = -1
  i++
  return setImg()
}

function setImg() {
  return sliderImg.setAttribute('src', 'images/'+images[i])
}


// Chamar nav mobile
var menuNav = document.querySelector('#menu')
var fechar = document.querySelector('#close')
var nav = document.querySelector('#nav-menu')

menuNav.addEventListener('click', abrirmenu)
function abrirmenu(){
  nav.style.display = 'block'
  previmg.style.display = 'none'
  nextimg.style.display = 'none'
  corpo.style.display = 'none'
}

fechar.addEventListener('click', fecharmenu)

function fecharmenu() {
  nav.style.display = 'none'
  previmg.style.display = 'block'
  nextimg.style.display = 'block'
  corpo.style.display = 'flex'
}


// Design do input
function mais(){
  var qtd = document.getElementById("qtd").value;
  var novo = qtd - (-1); //Evitando Concatenacoes
   document.getElementById("qtd").value = novo;
}
  
function menos(){
  var qtd = document.getElementById("qtd").value;
    if(qtd > 0) { //evita números negativos
    var novo = qtd - 1;
    document.getElementById("qtd").value = novo;
    }
}
