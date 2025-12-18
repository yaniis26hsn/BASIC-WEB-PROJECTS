const amount = document.getElementById("amount") ;
const pourcentage = document.getElementById("pourcentage") ;
const myRes = document.getElementById("myRes") ;
let sum  = 0;
function getSum() {
 sum = Number(amount.value)+ Number(amount.value)*Number(pourcentage.value)/100 ;
 myRes.textContent = sum.toFixed(2) ;

}