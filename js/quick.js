import {enableButtons,disableButtons,swap,delay,startCurComaparingElements,overCurComaparingElements} from "./sorting.js";

function selectandunselected(arr,start,end){
    for(let i=0;i<arr.length;i++){
        let element = document.getElementsByClassName("bar")[i];
        if(i>=start && i<=end){
            element.style.backgroundColor="blue";
            element.style.borderColor="blue";

        }else{
            element.style.backgroundColor="#4f4f5b";
            element.style.borderColor="#4f4f5b";
        }
    }
}
async function partition(arr, start, end){
    selectandunselected(arr,start,end);
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 

    var ele3;
    for (let i = start; i < end; i++) {
        let elements = document.getElementsByClassName("bar");
        let ele1 = elements[i];
        let ele2 = elements[pivotIndex];
        ele3 = elements[end];
        startCurComaparingElements(ele1,ele2);
        ele3.style.backgroundColor = "red";
        ele3.style.backgroundColor = "red";
        if(skipToLast===false)
                await new Promise(resolve => setTimeout(() => {resolve()},delay()));
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        swap(ele1,ele2);
        // Moving to next element
        pivotIndex++;
        }
        // overCurComaparingElements(ele1,ele2);
    }
    
    ele3.style.backgroundColor = "blue";
    ele3.style.backgroundColor = "blue";
    let elements = document.getElementsByClassName("bar");
    let ele1 = elements[end];
    let ele2 = elements[pivotIndex];
    // Putting the pivot value in the middle
    startCurComaparingElements(ele1,ele2);
    if(skipToLast===false)
                await new Promise(resolve => setTimeout(() => {resolve()},delay()));
    swap(ele1,ele2);
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    overCurComaparingElements(ele1,ele2);
    let ele4 = elements[pivotIndex];
    ele4.style.backgroundColor = "green";
    ele4.style.borderColor = "green";
    return pivotIndex;
};

async function quickSortRecursive(arr, start, end) {
    
    // Base case or terminating case
    if (start >= end) {
        if(start==end){
            let elements = document.getElementsByClassName("bar");
            let ele4 = elements[start];
            ele4.style.backgroundColor = "green";
            ele4.style.borderColor = "green";
        }
        return;
    }
    
    // Returns pivotIndex
    let index = await partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    await quickSortRecursive(arr, start, index - 1);
    await quickSortRecursive(arr, index + 1, end);
}
async function quickSort(arr) {
    disableButtons(["merge","insertion","bubble","selection"]);
    await quickSortRecursive(arr,0,arr.length-1);
    let elements = document.getElementsByClassName("bar");
    for(let i=0;i<arr.length;i++){
        let element  = elements[i];
        element.style.backgroundColor="green";
        element.style.borderColor="green";

    }
    enableButtons(["merge","insertion","bubble","selection"]);
    // console.log(arr);
}
document.getElementById("quick").addEventListener("click", ()=>quickSort(arr));