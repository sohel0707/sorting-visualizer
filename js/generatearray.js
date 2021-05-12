var arr = [];
var skipToLast = false;
var include = true;
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function getRandomInt(max) {
    return 5+Math.floor(Math.random() * max);
}
function generateNewArray(n){
    skipToLast=false;
    removeAllChildNodes(document.getElementById("bars"));
    var maxHeight = 500;
    var maxWidth  =1200;
    var multiplier = maxHeight / 100;
    var barWidth = Math.floor((maxWidth-n*5) / n);
    arr=[];
    for(let i=1;i<=n;i++){
        
        var randValue = getRandomInt(100);
        arr.push(randValue);
        var element = document.createElement("div");
        var element2 = document.createElement("div");
        var element3 = document.createElement("p");
        element3.classList.add("barText");
        element.classList.add("bar");
        element.style.height = randValue*multiplier + "px";
        element.style.width = barWidth + "px";
        element3.innerHTML = randValue + "";
        if(include===false){
            document.getElementById("bars").appendChild(element);
        }else{
        element2.appendChild(element3);
        element.appendChild(element2);
        document.getElementById("bars").appendChild(element);
        }

    }
}

var n = document.querySelector("#arr_sz").value; 

document.getElementById("new-array").addEventListener("click", ()=>{
    n = document.querySelector("#arr_sz").value; 
    include=true;
    if(n>=40){
        include=false;
    }
    generateNewArray(n);
});

document.getElementById("arr_sz").addEventListener("click",()=>{
    n = document.querySelector("#arr_sz").value; 
    include=true;
    if(n>=40){
        include=false;
    }
    
    generateNewArray(n);
});
include=true;
    if(n>=40){
        include=false;
    }
generateNewArray(n);


document.getElementById("skip").addEventListener("click",()=>{
    skipToLast = true;
});