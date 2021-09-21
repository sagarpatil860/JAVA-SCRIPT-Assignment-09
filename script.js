let bill=0;
let n=0; //no of people
let r=0;// rating
let p=0;// total payable
let s=0;//share for each
document.getElementById("calc").addEventListener("click",calctip);
function calctip(){
    bill=Number(document.getElementById("tbill").value);
    console.log(bill);
    n=Number(document.getElementById("npeople").value);
    console.log(n);
    r=Number(document.getElementById("rate").value);
    console.log(r);
    let tip=0;
    tip=(bill/100)*r;
    p=bill+tip;
    console.log(p);
    document.getElementById("payableamt").innerHTML=p;
    document.getElementById("eachshare").innerHTML=s;
    

    

}
console.log(bill);
console.log(n);