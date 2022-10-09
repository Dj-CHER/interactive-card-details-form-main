function CNumber() 
{
    let content = document.getElementById('fcnumber').value.split(" ");
    let cont = content.join("");
    if(cont.length % 4 == 0 && (cont.length != 0 && cont.length <= 13))
     document.getElementById('fcnumber').value = content.join(" ")+" ";
    console.log(content.join(" ").length);
    
    document.getElementById('card-number').innerHTML = content.join(" ");
    
}


function CVC() 
{
    let content = document.getElementById('fcvc').value;
    document.getElementById('cvc').innerHTML = content ;
}

function error_input()
{
    let name = document.getElementById('fname').value;
    let cnumber = document.getElementById('fcnumber').value;
    let mm = document.getElementById('fdate').value;
    let yy = document.getElementById('fyy').value;
    let cvc = document.getElementById('fcvc').value;
    let err = false;

    if(name.trim().length === 0) 
     {  document.getElementById("fname").style.border = "1px solid red";
        err = true;}
    
    if(cnumber.trim().length === 0 || /\D/.test(cnumber.split(" ").join("")) ) 
    {   document.getElementById("fcnumber").style.border = "1px solid red";
        document.getElementById('err-cnumber').style.visibility = "visible";
        err = true;}

    if(mm.trim().length === 0) 
    {   console.log('yes');
        document.getElementById("fdate").style.border = "1px solid red";
        document.getElementById('err-date').style.visibility = "visible";
        err = true;}

    if(yy.trim().length === 0) 
    {   document.getElementById("fyy").style.border = "1px solid red";
        document.getElementById('err-date').style.visibility = "visible";
        err = true;}

    if(cvc.trim().length === 0) 
    {   document.getElementById("fcvc").style.border = "1px solid red";
        document.getElementById('err-cvc').style.visibility = "visible";
        err = true;}
     
    return err
}


function Submission()
{
    if(!error_input())
     {
        document.getElementById("information-form").style.visibility = "hidden";
        document.getElementById("TnkYou").style.visibility = "visible";

        document.getElementById('err-cnumber').style.visibility = "hidden";
        document.getElementById('err-date').style.visibility = "hidden";
        document.getElementById('err-cvc').style.visibility = "hidden"
     }
    
    
}