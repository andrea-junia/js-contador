let currentNumberWrapper = document.getElementById("currentNumber")
let body = document.getElementById("pagina")
const INCREMENT  = document.getElementById("increment")
const DECREMENT  = document.getElementById("decrement")
const aCORES     = ["blueviolet","yellow","navy","aqua","coral","cyan","green","magenta","orange","black"]
const CORNEGATIVO= "red"

let count = 0

INCREMENT.addEventListener("click",
    function increment() {
        body.style.backgroundColor = aCORES[count];
        count++;        
        
        if (count == 0) {
            body.style.backgroundColor = "darkgray";
        } 

        if (count <= 10){
            currentNumberWrapper.innerHTML = count;
        }

        if (count >= 0){
            currentNumberWrapper.classList.remove("negative");
            document.getElementById("atencao").innerHTML = "";
        }
    }
)

DECREMENT.addEventListener("click",
    function decrement() {
        console.log(count);
        count--;
        body.style.backgroundColor = aCORES[count-1];
        if (count >= -10) {
            currentNumberWrapper.innerHTML = count;
        } 
        
        if (count == 0) {
            body.style.backgroundColor = "darkgray";
        } 

        if (count < 0){
            currentNumberWrapper.classList.add("negative")
            body.style.backgroundColor = CORNEGATIVO;
            currentNumberWrapper.style.color = "greenyellow";
            fShowCaution();
        }
    }
)

function fShowCaution(){    
    
    document.getElementById("atencao").innerHTML = "Atencao: area negativa";

}