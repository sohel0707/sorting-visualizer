export function disableButtons(array) {
    array.forEach((name,ind)=>{
        document.getElementById(name).disabled = true;
    });
    document.getElementById("new-array").disabled=true;
    document.getElementById("arr_sz").disabled=true;
}

export function enableButtons(array) {
    array.forEach((name,ind)=>{
        document.getElementById(name).disabled = false;
    });
    document.getElementById("new-array").disabled=false;
    document.getElementById("arr_sz").disabled=false;
}
export function swap(el1,el2)
    {
 
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
      if(include){
        let val1 =el1.childNodes[0].childNodes[0].innerHTML;
        let val2 = el2.childNodes[0].childNodes[0].innerHTML;
        
        el1.childNodes[0].childNodes[0].innerHTML  =val2+"";
        el2.childNodes[0].childNodes[0].innerHTML  =val1+"";
      }
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
    
      el1.style.height = transform2;
      el2.style.height = transform1;
 
    }
// export default all;
 export function delay(){
    let speed = document.getElementById("speed").value;
    return 400/speed;
}

export function startCurComaparingElements(ele1,ele2){
    
    ele1.style.backgroundColor = "red";
    ele2.style.backgroundColor = "red";
}

export function overCurComaparingElements(ele1,ele2){
    ele1.style.backgroundColor = "blue";
    ele2.style.backgroundColor = "blue";
}
