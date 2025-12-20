const weight = document.getElementById("weight") ;
const height = document.getElementById("height") ;
const warning = document.getElementById("warning") ;
const submit = document.getElementById("mySubmit") ;
const bmi = document.getElementById("bmi") ;
const judgment = document.getElementById("judgment") ;
const Conclusion = document.getElementById("myRes") ;

function Calculate(){
     if(height.value <= 0 && weight.value <= 0 ) {
        warning.innerHTML = "both height and weight are invalid" ;
        return ;
    }
    if(height.value <= 0) {
        warning.innerHTML = "height is invalid" ;
        return ;
    }
     if(weight.value <= 0) {
        warning.innerHTML = "weight is invalid" ;
        return ;
    } 
    // the first condition must be the first otherwise it will never be executed
   

    var result = Math.round(100 * (weight.value /(height.value/100 * height.value/100)  )) / 100 ;
    // we needed to devide by 100 becasue i wanted to keep the original equation form
    // i multiplied and devided y 100 to get two 2 numbers after the comma , since round fnc round to the unit but i want to round to 0.01
    bmi.innerHTML = result ;
    if(result < 18.5)
        { judgment.innerHTML = "Underweight" ;
         Conclusion.style.color = "red" ;
        }
    else if(result < 25)  { 
        judgment.innerHTML = "Normal weight" ;
         Conclusion.style.color = "lightgreen" ;
        }
    else if(result < 30)  { 
        judgment.innerHTML = "Overweight" ;
         Conclusion.style.color = "yellow" ;
        }
    else  { judgment.innerHTML = "Obesity" ;
         Conclusion.style.color = "red" ;
        }
    


}