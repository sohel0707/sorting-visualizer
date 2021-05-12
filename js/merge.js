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
async function merge( arr,  start,  mid,  end)
{
    selectandunselected(arr,start,end);
    let start2 = mid + 1;
    if (arr[mid] <= arr[start2]) {
        return;
    }
    while (start <= mid && start2 <= end) {
 
        // If element 1 is in right place
        var elements = document.getElementsByClassName("bar");
        var ele1 = elements[start];
        var ele2 = elements[start2];
        startCurComaparingElements(ele1,ele2);
        if(skipToLast===false)
                await new Promise(resolve => setTimeout(() => {resolve()},delay()));
        if (arr[start] <= arr[start2]) {
           start++;
        }
        else {
             let value = arr[start2];
             let index = start2;
             
            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index != start) {
                elements = document.getElementsByClassName("bar");
                let element1 = elements[index];
                let element2 = elements[index-1];
                swap(element1,element2);
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
            // Update all the poers
            start++;
            mid++;
            start2++;
        }
        // elements = document.getElementsByClassName("bar");
        // ele1 = elements[start];
        // ele2 = elements[start2];
        overCurComaparingElements(ele1,ele2);
        
    }
}
 
/* l is for left index and r is right index of the
   sub-array of arr to be sorted */
async function mergeSort(arr,  l,  r)
{   
    
    if (l < r) {
 
        // Same as (l + r) / 2, but avoids overflow
        // for large l and r
        let m = l + Math.floor((r - l) / 2);
 
        // Sort first and second halves
        await mergeSort(arr, l, m);//left part 
        await mergeSort(arr, m + 1, r); //right part
 
        await merge(arr, l, m, r); // left start middle right end
    }
}
async function mergeSortAlgo(arr) {
    disableButtons(["bubble","insertion","quick","selection"]);
    await mergeSort(arr,0,arr.length-1);
    let elements = document.getElementsByClassName("bar");
    for(let i=0;i<arr.length;i++){
        let element  = elements[i];
        element.style.backgroundColor="green";
        element.style.borderColor="green";

    }
    enableButtons(["bubble","insertion","quick","selection"]);
}
document.getElementById("merge").addEventListener("click", ()=>mergeSortAlgo(arr));