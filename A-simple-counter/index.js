const decreasebtn = document.getElementById("decrease") ;
const increasebtn = document.getElementById("increase") ;
const resetbtn = document.getElementById("reset") ;
const countLabel = document.getElementById("mycntr") ;
let count = 0 ;

resetbtn.onclick = function(){
    count = 0 ;
    countLabel.textContent = count  ;
}
increasebtn.onclick = function(){
    count ++ ;
    countLabel.textContent = count ;
}
decreasebtn.onclick = function(){
    count -- ;
    countLabel.textContent = count ;
}