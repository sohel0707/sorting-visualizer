import {enableButtons,disableButtons,swap,delay,startCurComaparingElements,overCurComaparingElements} from "./sorting.js";
// import {arr} from "./generatearray.js";
// let sorting = await import('./sorting.js');

function swapEle(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



async function bubbleSort(arr, n) {
    disableButtons(["merge","insertion","quick","selection"]);
    var i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            var elements = document.getElementsByClassName("bar");
            var ele1 = elements[j];
            var ele2 = elements[j+1];
            
            startCurComaparingElements(ele1,ele2);
            if(skipToLast==false)
                await new Promise(resolve => setTimeout(() => {resolve()},delay()));
            // await new Promise(resolve => setTimeout(() => {resolve(), 2}));
            if (arr[j] > arr[j + 1]) {
                
                swap(ele1, ele2);
                swapEle(arr,j,j+1);


            }
            overCurComaparingElements(ele1,ele2);
        }
        var lastElement = document.getElementsByClassName("bar")[n-i-1];
        lastElement.style.backgroundColor="green";
        lastElement.style.borderColor = "green";
    }
    enableButtons(["merge","insertion","quick","selection"]);
}


document.getElementById("bubble").addEventListener("click", ()=>bubbleSort(arr,arr.length));
// document.getElementById("bubble").addEventListener("click", ()=>hello());