const goUpBTN = document.querySelector(".go-up");
const signBTN = document.querySelector(".choice__btn");

goUpBTN.addEventListener('click', ()=>{
  window.scroll(0,0)
});

signBTN.addEventListener("click", goRegistrationBTN);


function goRegistrationBTN(){
  window.scroll(0,1400);
}