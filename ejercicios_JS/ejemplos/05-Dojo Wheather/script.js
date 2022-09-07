const tempMed = document.getElementById("temperatura")
let tempVal = document.querySelectorAll(".tempera")

function displayAlert(){
    alert("Loading report...")
}

function onClickHidden(){
    var elem = document.getElementById("box-bott");
    elem.style.display = "none";
}


let numeroT = [];
let numeroTF =[];

function convertTemp(){
    let valuesT = tempMed.value;
        for(let i=0; i<tempVal.length; i++){
            numeroT.push(parseInt(tempVal[i].innerHTML));
            if(valuesT === "°F"){
                numeroTF.push((numeroT[i]*9/5)+32)
                tempVal[i].innerHTML = numeroTF[i]+"°"
            }
            else{
                tempVal[i].innerHTML=numeroT[i]+"°"
            }
    }
}



