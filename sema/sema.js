
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
   

buttonClick('before','was')
buttonClick('home','main')
buttonClick('first','one')
buttonClick('third','three')
buttonClick('fourth','four')
buttonClick('fifth','five')
buttonClick('sixth','six')


function goBack() {
    let backButton = document.getElementById('goback')
    backButton.addEventListener('click',
    window.history.back())
  }

