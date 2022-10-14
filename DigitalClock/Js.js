setInterval(clock,0);
function clock(){
var c=new Date();
document.getElementById("clo").innerText=c.toLocaleTimeString();
document.getElementById("dat").innerText=c.toLocaleDateString();
}
 