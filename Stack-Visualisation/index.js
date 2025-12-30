var currantWord = document.getElementById("currantWord") ;
var push = document.getElementById("push") ;
var popb = document.getElementById("popb") ;
var text = document.getElementById("mytext") ;
var stack = document.getElementById("mystack") ;
 
function add(){
    var word = text.value ;
  //   stack.innerHTML += "<li>" + word + "</li>" ; (the simple way)
  var newEl = document.createElement("li") ;
   newEl.innerHTML = word ;
   stack.prepend(newEl) ; // we cant use insertbefore because in the beggining there nothing to insert before it
   text.value = "" ; // making the input feild empty after pushing
}
function pop(){
    stack.removeChild(stack.firstChild) ;

}
function inputChanged(){
    currantWord.innerHTML = text.value ;
}
