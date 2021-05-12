import {enableButtons,disableButtons,swap,delay,startCurComaparingElements,overCurComaparingElements} from "./sorting.js";

function swapEle(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

async function insertionSort(arr, n) 
{ 
    disableButtons(["merge","bubble","quick","selection"]);
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
        var elements = document.getElementsByClassName("bar");
        var ele1 = elements[j];
        var ele2 = elements[i];
            
        
        
        while (j >= 0 && arr[j] > arr[j+1])
        { 
            
            ele1=elements[j];
            ele2=elements[j+1];
            startCurComaparingElements(ele1,ele2);
            if(skipToLast==false)
                await new Promise(resolve => setTimeout(() => {resolve()},delay()));
            
            // arr[j + 1] = arr[j]; 
            
            swap(ele1,ele2);
            swapEle(arr,j,j+1);
            j = j - 1; 
            overCurComaparingElements(ele1,ele2);
        } 
        var Element = document.getElementsByClassName("bar")[j+1];
        Element.style.backgroundColor="green";
        
    } 
     elements = document.getElementsByClassName("bar");
    for(let i=0;i<arr.length;i++){
        let element  = elements[i];
        element.style.backgroundColor="green";
        element.style.borderColor="green";

    }
    enableButtons(["merge","bubble","quick","selection"]);
} 

document.getElementById("insertion").addEventListener("click", ()=>insertionSort(arr,arr.length));