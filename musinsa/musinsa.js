
function srcChange(a){
    let main =document.querySelectorAll(".메인")[0];
    let semaImg=document.getElementById(a);
    main.src = semaImg.src
}

function scrollUp (){window.scrollTo({top:0, left:0, behavior:'smooth'})}

function buttonClick(a,b){
    let first= document.getElementById(a)
   first.addEventListener('click',()=>{
   srcChange(b),
   scrollUp()
   })}

// function hide (){
//     s=document.querySelectorAll('.side')[0];
//     s.style.display='none'
// }

let s=document.querySelectorAll('.side')[0];

function hideSide(){
    let m=document.getElementById('was');
    let n=document.getElementById('main');
    let main =document.querySelectorAll(".메인")[0];
    let navli=document.querySelectorAll('.navli');
    for (i=0; i<navli.length; i++){
        window.addEventListener('mouseover',
            function (){
                if (main.src == m.src || main.src == n.src){
                    s.style.display = "none"}
                else (s.style.display = "flex")
            })}}

hideSide()



buttonClick('before','was')
buttonClick('home','main')
buttonClick('first','one')
buttonClick('second','two')


function goBack() {
    let backButton = document.getElementById('goback')
    backButton.addEventListener('click',
    function () {window.history.back()})
  }



  goBack()