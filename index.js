

function getHeight(u) {
  let m = document.getElementsByClassName(u)[0];

  return m.offsetTop
}

getHeight('web_section')

console.log(getHeight('web_section'))



let navIntro=document.getElementById('nav__intro')
let navUx=document.getElementById('nav__ux')
let navIll=document.getElementById('nav__ill')
let nav3d=document.getElementById('nav__3d')
let navCon=document.getElementById('nav__con')

function navMove (a,b){
  a.addEventListener('click', 
    function (){window.scrollTo({top:b, left:0, behavior:'smooth'})}
    )
}

navMove(navIntro,0)
navMove(navUx,getHeight('web_section'))
navMove(navIll,getHeight('illust__wrap'))
navMove(nav3d,getHeight('blender__wrap'))
navMove(navCon,20000)


// swiper_start
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  // swiper_end


  
function fadeOut(a){
  var t=document.getElementById('intro__vid');
  var m=document.getElementsByClassName(a)[0];
  t.addEventListener('mouseenter', 
  function () {m.style.opacity = "0%", 
  console.log ('yee')
  }
 )
}

function fadeIn(a){
  var t=document.getElementById('intro__vid');
  var m=document.getElementsByClassName(a)[0];
  t.addEventListener('mouseout', 
  function() {m.style.opacity = "100%"
  }
 )
}

fadeOut('portf')
fadeIn('portf')

// intro js

function darker(a , b){
  var m=document.getElementsByClassName('web__item')[b];
  var t=document.getElementsByClassName(a)[b];
  m.addEventListener ('mouseover', 
  function brightness(){
    if (t.style.filter == "brightness(50%)")
    {t.style.filter = "none"}
    else (t.style.filter = "brightness(50%)")
  })}
  
function lighter(a , b){
  var m=document.getElementsByClassName('web__item')[b];
  var t=document.getElementsByClassName(a)[b];
  m.addEventListener ('mouseout', 
  function brightness(){
    if (t.style.filter == "brightness(50%)")
    {t.style.filter = "none"}
    else (t.style.filter = "brightness(50%)")
  })}

function webtextshow(a,b){
  var m=document.getElementsByClassName('web__item')[b];
  var t=document.getElementsByClassName(a)[b];
  m.addEventListener ('mouseover',
  function (){
  if (t.style.display == "flex"){
    t.style.display = "none"}
  else (t.style.display = "flex")
  })}

function webtexthide(a,b){
  var m=document.getElementsByClassName('web__item')[b];
  var t=document.getElementsByClassName(a)[b];
  m.addEventListener ('mouseout',
  function (){
  if (t.style.display == "flex"){
    t.style.display = "none"}
  else (t.style.display = "flex")
   })}

darker('web__image',0)
lighter('web__image',0)
webtextshow('webp',0)
webtexthide('webp',0)

darker('web__image',1)
lighter('web__image',1)
webtextshow('webp',1)
webtexthide('webp',1)

darker('web__image',2)
lighter('web__image',2)
webtextshow('webp',2)
webtexthide('webp',2)

darker('web__image',3)
lighter('web__image',3)
webtextshow('webp',3)
webtexthide('webp',3)

function openLink (a,b){
  let m= document.getElementById(a);
  m.addEventListener('click',
  function (){window.location.href = b} 
  )}

 openLink ('musinsa', 'D:\code\musinsa\musinsa.html') 
 openLink ('sema', 'D:\code\musinsa\musinsa.html') 
 openLink ('woders', 'D:\code\musinsa\musinsa.html') 
 openLink ('city', 'D:\code\musinsa\musinsa.html') 

// illust start


function illustin () {
  let ill=document.querySelectorAll('.ill__item');
  var i;
  for (i = 0; i < ill.length; i++) {
  ill[i].addEventListener ('mouseover',
    function () {
      if (this.style.filter == "brightness(50%)")
      {this.style.filter = "none"}
      else (this.style.filter = "brightness(50%)")
  })}}

  function illustout () {
    let ill=document.querySelectorAll('.ill__item');
    var i;
    for (i = 0; i < ill.length; i++) {
    ill[i].addEventListener ('mouseout',
      function () {
        if (this.style.filter == "brightness(50%)")
        {this.style.filter = "none"}
        else (this.style.filter = "brightness(50%)")
    })}}

function swap() {
  var s=document.querySelectorAll('.ill__item');
  var b=document.querySelectorAll('.illust__item__big');
    var i;
    for (i = 0; i < s.length; i++) {
    s[i].addEventListener ('mouseover',
    function() {b[0].src = this.src
    })}}

swap()

function illpopDown(){
  var b=document.getElementById('illustpopup');
  b.style.display='none';
}

function illsrcChange(){
  var s=document.querySelectorAll('.ill__item');
  var b=document.getElementById('illustpopupimg');
    var i;
    for (i = 0; i < s.length; i++) {b[0].src = s[i].src}
}

function swapIll() {
  var s=document.querySelectorAll('.ill__item');
  var b=document.getElementById('illustpopupimg');
    var i;
    for (i = 0; i < s.length; i++) {
    s[i].addEventListener ('click', 
    function illsrcChange () {b.src = this.src}
    )}}

    function illPopUp() {
      var s=document.querySelectorAll('.ill__item');
      var b=document.getElementById('illustpopup');
        var i;
        for (i = 0; i < s.length; i++) {
        s[i].addEventListener ('click', 
        function (){b.style.display='flex';
      })}}

function illCloseDown() {
      var b=document.getElementById('illustpopup');
      b.addEventListener ('click', ()=> {
      console.log('gg') ;
      illpopDown ()
      })}
        
swapIll ()
illPopUp ()
illCloseDown ()



// 3d start

function popDown(){
  var b=document.querySelectorAll('.blender__big__container');
  b[0].style.display='none';
}

function srcChange(){
  var s=document.querySelectorAll('.blender__img');
  var b=document.querySelectorAll('.blender__big');
    var i;
    for (i = 0; i < s.length; i++) {b[0].src = s[i].src}
}

function swap3d() {
  var s=document.querySelectorAll('.blender__img');
  var b=document.querySelectorAll('.blender__big');
    var i;
    for (i = 0; i < s.length; i++) {
    s[i].addEventListener ('click', 
    function srcChange () {b[0].src = this.src}
    )}}

    function popUp() {
      var s=document.querySelectorAll('.blender__img');
      var b=document.querySelectorAll('.blender__big__container');
        var i;
        for (i = 0; i < s.length; i++) {
        s[i].addEventListener ('click', 
        function (){b[0].style.display='flex';
      })}}

function closeDown() {
      var b=document.querySelectorAll('.blender__big__container');
      b[0].addEventListener ('click', ()=> {
      console.log('gg') ;
      popDown ()
      })}
        
    
closeDown()
popUp ()
swap3d()

// videioset

let intro = document.getElementById('intro__vid');
let second = document.getElementsByClassName('informvid')[0];
let third = document.getElementsByClassName("thirdvid")[0];
let fourth = document.getElementById('fall');

function playVid(a){
  a.addEventListener('mouseenter',
  function (){a.play()}
  )}

playVid(intro)
playVid(second)
playVid(third)
playVid(fourth)

