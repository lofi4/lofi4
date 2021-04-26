
let navIntro=document.getElementById('nav__intro')
let navUx=document.getElementById('nav__ux')
let navIll=document.getElementById('nav__ill')
let navCha=document.getElementById('nav__cha')
let nav3d=document.getElementById('nav__3d')
let navCon=document.getElementById('nav__con')

let swiperCon = document.getElementsByClassName('.swiper-wrapper')[0]
let main = document.getElementById('main')

function getHeight(u) {

  let m = document.getElementById(u);
  return m.offsetTop
}



function navMove (a,b){
  a.addEventListener('click', 
    function ()
    {window.scrollTo({top:b, left:0, behavior:'smooth'})}
    )}

// navMove(navIntro,0)
navMove(navIntro,getHeight('second'))
navMove(navUx,getHeight('third'))
navMove(navIll,getHeight('fourth'))
navMove(navCha,getHeight('characterwrap'))
navMove(nav3d,getHeight('sixth'))
navMove(navCon,20000)

// navend

function introHide(){
    document.getElementById('lodingdiv').style.display='none'
  }
  
  function scrollZero() {window.scrollTo({top:0, left:0})}
  
  window.onload = ()=>
  introHide(),
  scrollZero()
// loading  

let dragVid = document.getElementById('dragvid')
let navMenu= document.getElementsByClassName('navbar')[0]

function rotatePoint1(){
    navMenu.addEventListener('mouseenter',
    function (){dragVid.play()})}
    

function rotatePoint2(){
        navMenu.addEventListener('mouseleave',
        function (){dragVid.play()})}
        
rotatePoint1()
rotatePoint2()

const introPage = document.getElementsByClassName('introscroll')[0];
const secondCard = document.getElementById('secondcard')

const firstPage = document.getElementById('firstPage')
const secondPage = document.getElementById('secondPage')
const thirdPage = document.getElementById('thirdPage')

const introSection = document.getElementById('intro')
const skillSection = document.getElementById('skill')
const contectSection = document.getElementById('contect')

function skillScroll(){
    skillSection.addEventListener('click',
    function (){ 
       secondCard.scrollTo(0, secondCard.clientHeight);
    })}

    function introScroll(){
        introSection.addEventListener('click',
        function (){ 
        secondCard.scrollTo(0, 0)
        })}
        
        function contectScroll(){
            contectSection.addEventListener('click',
            function (){ 
                secondCard.scrollTo(0, 5000)
            })}
   
   
introScroll()
skillScroll()
contectScroll()
// scrollset

let intro = document.getElementById('introvid');
let last = document.getElementById('lastvid');
let protf=document.getElementsByClassName('portf')[0]

function playVid(a){
  a.addEventListener('mouseover',
  function (){a.play()}
  )}

function playVid2(a){
  protf.addEventListener('mouseover',
    function (){a.play()}
    )}

function Hidebanner(){
  intro.addEventListener('playing',
  function () {protf.style.opacity='0%'}
  )} 
function Hidebanner2(){
    intro.addEventListener('ended',
    function () {protf.style.opacity='100%'}
    )} 
    

Hidebanner()
Hidebanner2()
playVid(intro)
playVid2(intro)
playVid(last)

// popupset

let bigCon1=document.getElementById('bigcontainer1');
let bigImg1=document.getElementById('bigimg1');
let bigCon2=document.getElementById('bigcontainer2');
let bigImg2=document.getElementById('bigimg2');
let bigCon3=document.getElementById('bigcontainer3');
let bigImg3=document.getElementById('bigimg3');
let bigCon4=document.getElementById('bigcontainer4');
let bigImg4=document.getElementById('bigimg4');

let vector=document.querySelectorAll('.vector');
let illust=document.querySelectorAll('.illust');
let blenderImg=document.querySelectorAll('.blender__img');
let characterImg=document.querySelectorAll('.characterImg');

function popDown(bigcon){
    bigcon.style.display='none';
  }
  function swap3d(img,bigimg) {
      var i;
      for (i = 0; i < img.length; i++) {
      img[i].addEventListener ('click', 
      function srcChange () {bigimg.src = this.src}
      )}}
  
      function popUp(img,bigcon) {
          var i;
          for (i = 0; i < img.length; i++) {
          img[i].addEventListener ('click', 
          function (){bigcon.style.display='flex';
        })}}
  
  function closeDown(bigcon) {
        bigcon.addEventListener ('click', ()=> {
        popDown (bigcon)
        })}

function illustIn (smallImg) {
            var i;
            for (i = 0; i < smallImg.length; i++) {
            smallImg[i].addEventListener ('mouseover',
              function () {
                if (this.style.filter == "brightness(70%)")
                {this.style.filter = "none"}
                else (this.style.filter = "brightness(70%)")
            })}}
          
            function illustOut (smallImg) {

              var i;
              for (i = 0; i < smallImg.length; i++) {
              smallImg[i].addEventListener ('mouseout',
                function () {
                  if (this.style.filter == "brightness(70%)")
                  {this.style.filter = "none"}
                  else (this.style.filter = "brightness(70%)")
              })}}

illustIn(vector)
illustOut(vector)
illustIn(illust)
illustOut(illust)
illustIn(blenderImg)
illustOut(blenderImg)
illustIn(characterImg)
illustOut(characterImg)

          
  closeDown(bigCon1)
  popUp (vector,bigCon1)
  swap3d(vector,bigimg1)
  
          
  closeDown(bigCon2)
  popUp (illust,bigCon2)
  swap3d(illust,bigimg2)
  
            
  closeDown(bigCon3)
  popUp (blenderImg,bigCon3)
  swap3d(blenderImg,bigimg3)

  closeDown(bigCon4)
  popUp (characterImg,bigCon4)
  swap3d(characterImg,bigimg4)


//   popupend


function openLink (a,b){
    let m= document.getElementById(a);
    m.addEventListener('click',
    function (){window.location.href = b} 
    )}
  
   openLink ('musinsa', 'https://lofi4.github.io/musinsa/') 
   openLink ('sema', 'https://lofi4.github.io/sema/') 
   openLink ('wonders', 'https://lofi4.github.io/wonders/') 
   openLink ('city', 'https://lofi4.github.io/citygarden/') 



   function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  

  document.querySelector('#Copy1').onclick = function() {
    Clipboard_CopyTo('lofi4mailbox@gmail.com');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Thank you!",
      text:"Email Copyed!",
      showConfirmButton: false,
      timer: 1500
    });
  }
  document.querySelector('#Copy2').onclick = function() {
    Clipboard_CopyTo('lofi4mailbox@gmail.com');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Thank you!",
      text:"Email Copyed!",
      showConfirmButton: false,
      timer: 1500
    });
  }