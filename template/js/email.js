
function subbtn(){
    var emailbox=document.getElementById("sub-box");
    if(emailbox.value==""){
       alert("Input email box");
       return false;
     }//else if(emailbox.value !="@gmail.com"){
    //     alert("correction your gmail id");
    //     return false;
    //  }
    else{
        alert("Thanks for Subscribe");
        return true;
    }
}