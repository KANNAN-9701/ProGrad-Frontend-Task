function check(){
    var n=document.getElementById("op").value;
    var temp=n,a="";
    for(i=0;i<n.length;i++){
        a=n[i]+a;
    }
    if(temp==a && temp!==""){
        alert(temp+" is palindrome");
    }
    else if(temp==""){
        alert("You are not write anything...")
    }
    else{
        alert(temp+" is not palindrome");
    }
}
