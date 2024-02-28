// fetching screen from html
let screen = document.querySelector("#display");


let str ;

// fetching all buttons
let buttons = document.querySelectorAll(".inner-div");

for(let button of buttons){
    button.addEventListener("click",(event) => {

        if(event.target.innerText == "AC"){
            screen.innerText = " ";
        }
        else if(event.target.innerText == "DEL"){
            screen.innerText = screen.innerText.slice(0,-1);
        }
        else if(event.target.innerText == "="){
            screen.innerText = eval(screen.innerText);
        }
        else{
            str = event.target.innerText;
            screen.innerText = screen.innerText + str;
        }
    })
}


































// let button = document.querySelector("#button5");

// button.onclick = (value) =>{
//     let str = button.innerText ;
//     console.log(str);
//     button.style.backgroundColor = "red";
// }

