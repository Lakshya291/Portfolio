var display = document.getElementById("result");
function myFunc(event){
    var x=event.target.textContent;
    var input1;
    if(x==="+/-"){
        display.innerHTML+="-";
    }else if(x==="AC"){
        display.innerHTML="";
    }else if(x==="="){
        var fin = display.textContent;
        var result  =eval(fin);
        display.innerHTML=result;
    }else{
        display.textContent+=x;
    }
}
