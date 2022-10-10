function alertbox(){
    alert("This is an Alert Box !");
}
function confirmbox(){
    var c=confirm("Do you want to exit the page ?");
    if(c==true){
        alert("Thanks for visiting our page...");
    }
    else{
        alert("You are stay here...keep learning...");
    }
}
function promptbox(){
    var p=prompt("Enter your Name :");
    if(p!=null){
        alert("Welcome, "+p)
    }
    else{
        alert("You are not enter anything")
    }
}