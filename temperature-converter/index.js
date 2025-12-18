const textbox = document.getElementById("myinput") ;
const toFern = document.getElementById("toFern") ;
const toCel = document.getElementById("toCel") ;
const myRes = document.getElementById("myRes") ;
let temp ;
function convert() {
    if(toFern.checked){
   temp = Number(textbox.value);
   temp=temp*9/5 + 32 ;
   myRes.textContent = temp.toFixed(1) + "F" ;
    }
    else if(toCel.checked){

   temp = Number(textbox.value);
   temp=(temp-32) * 5/9 ;
   myRes.textContent = temp.toFixed(1) + "C" ;
    }
    else{
        myRes.textContent = "select a unit" ;
    }
}