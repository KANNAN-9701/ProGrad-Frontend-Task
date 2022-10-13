function lig(){
    var a=document.getElementById("one");
    a.style.backgroundColor="white";
    a.style.color="black"
}
function dar(){
    var b=document.getElementsByClassName("one")[0];
    b.style.backgroundColor="black";
    b.style.color="white"
}
function hid(){
    document.getElementsByName("one")[0].style.visibility="hidden";
}
function vis(){
    document.querySelector("h1").style.visibility="visible";
}
function rec(){
    document.getElementsByTagName("h1")[0].style.borderRadius="2%";
}
function rou(){
    document.querySelectorAll("h1")[0].style.borderRadius="50%";
}

var t=setInterval(time,0);
function time(){
    var t=new Date().toLocaleTimeString();
    document.getElementById("one").innerText=t;
}

function sadd(){
    var c=document.createElement("input");
    document.getElementById("div2").appendChild(c);
}
 
var el1=document.getElementsByName("btn1")[0];
el1.addEventListener("dblclick",bgcolor1);
function bgcolor1(){
    document.body.style.background="lightblue";
}
var el2=document.getElementsByName("btn2")[0];
el2.addEventListener("mouseover",bgcolor2);
function bgcolor2(){
    document.body.style.background="pink";
}
var el3=document.getElementsByName("btn3")[0];
el3.addEventListener("click",bgcolor3);
function bgcolor3(){
    document.body.style.background="lightgreen";
}

function start(){
    var c=setInterval(count,1000);
    var n=10;
    function count(){
        if (n==0){
            clearInterval(c);
        }
        document.getElementById("count").innerText=n;
        n-=1;
    }
}
function box(){
    var d=new Date().toLocaleDateString();
    document.getElementsByClassName("dat")[0].innerText=d;
}
 
function addrow(){
    var tab=document.getElementById("tab1");
    var name=document.getElementById("name1");
    var RollNo=document.getElementById("rollno1");
    var Department=document.getElementById("dept1");
    var row=tab.insertRow(-1);
    var l=[name.value,RollNo.value,Department.value];
    var j=0;
    for(var i=0;i<3;i++,j++){
        row.insertCell(i).innerHTML=l[j];
    }
    name.value="";
    RollNo.value="";
    Department.value="";
}

function update(){
    var tab=document.getElementById("tab1");
    var row1=document.getElementById("row1");
    var col1=document.getElementById("col1");
    var val1=document.getElementById("val1");
    var l=[row1.value,col1.value,val1.value];
    tab.rows[parseInt(l[0])].cells[parseInt(l[1])-1].innerHTML=l[2];
    row1.value="";
    col1.value="";
    val1.value="";
}
function ctable(){
    var tab=document.getElementById("tab2");
    var row2=document.getElementById("row2");
    var col2=document.getElementById("col2");
    for(var i=0;i<Number(row2.value);i++,j++){
        r=tab.insertRow(-1);
        for(var j=0;j<Number(col2.value);j++){
            r.insertCell(j).innerHTML=prompt(i+" row "+j+" col Enter the value");
        }
    }
    row2.value="";
    col2.value="";
}
function update2(){
    var tab=document.getElementById("tab2");
    var row1=document.getElementById("row3");
    var col1=document.getElementById("col3");
    var val1=document.getElementById("val2");
    var l=[row1.value,col1.value,val1.value];
    tab.rows[parseInt(l[0])-1].cells[parseInt(l[1]-1)].innerHTML=l[2];
    row1.value="";
    col1.value="";
    val1.value="";
}

 
 