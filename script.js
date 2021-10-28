function showrate()
{
    var rate = document.getElementById("rate");
    document.getElementById("showrate").innerHTML=`${rate.value}%`;
    return rate.value;
}

setInterval(showrate,1);
function compute()
{

    //get the principal
    var p = document.getElementById("principal").value;
    //alert for a zero entiry
    if (p <= 0){ 
        alert("Please enter a positive number");
        setTimeout(function(){
            document.getElementById("principal").focus();}, 1);
            return false;
    }

    
    //get years
    var years= document.getElementById("years").value;
    //get rate
    var r = document.getElementById("rate").value;
    
    //the final equation 
    var interest = p * years * r /100;
    var newYear= parseInt(years) + parseInt (new Date().getFullYear());
    console.log(interest);
    console.log(newYear);
    var newValue = parseInt(interest)+ parseInt(p);
    console.log(newValue);
    //change p attribute
    
    document.getElementById("wasHidden").style.display ="block";

    // change mark 1
    document.getElementById("1").innerHTML= p;
    //cahnge mark 2
    document.getElementById("2").innerHTML= r+"%";
    //change mark 3
    document.getElementById("3").innerHTML= newValue;
    //change mark 4
    document.getElementById("4").innerHTML= newYear;
}