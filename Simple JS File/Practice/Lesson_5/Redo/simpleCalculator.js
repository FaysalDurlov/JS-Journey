let calcuation = localStorage.getItem("calcuation") || "" ;

function UpdateValue(value){
    calcuation+=value;
    console.log(calcuation);
    localStorage.setItem("calcuation",calcuation);
}

document.querySelectorAll(".calculatorButtons").forEach((button) => {
    button.addEventListener("click",(event)=>{
        if(event.target.value === "="){
            console.log(eval(calcuation));
        }else if(event.target.value === "clear"){
            calcuation = "";
            localStorage.setItem("calcuation", "");
        }else{
            UpdateValue(event.target.value);
        }
    });
});