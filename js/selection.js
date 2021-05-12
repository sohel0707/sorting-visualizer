import {enableButtons,disableButtons,swap,delay,startCurComaparingElements,overCurComaparingElements} from "./sorting.js";

async function selectionSort(inputArr) { 
    disableButtons(["merge","insertion","quick","bubble"]);
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        
        for(let j = i+1; j < n; j++){
            var elements = document.getElementsByClassName("bar");
            var ele1 = elements[min];
            var ele2 = elements[j];

            startCurComaparingElements(ele1,ele2);
            if(skipToLast==false)
                await new Promise(resolve => setTimeout(() => {resolve()},delay()));

            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
            overCurComaparingElements(ele1,ele2);
         }
         if (min != i) {
            elements = document.getElementsByClassName("bar");
            ele1 = elements[min];
            ele2 = elements[i];
            swap(ele1,ele2);
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
        var lastElement = document.getElementsByClassName("bar")[i];
        lastElement.style.backgroundColor="green";
    }
    enableButtons(["merge","insertion","quick","bubble"]);
}


document.getElementById("selection").addEventListener("click", ()=>selectionSort(arr));