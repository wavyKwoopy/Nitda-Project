var mini = true;
function toggleSidebar() {
if (mini) {
console.log("opening sidebar");
document.getElementById("mySidebar").style.width = "280px";
document.getElementById("main").style.marginLeft = "280px";
this.mini = false;
} else {
console.log("closing sidebar");
document.getElementById("mySidebar").style.width = "80px";
document.getElementById("main").style.marginLeft = "80px";
this.mini = true;
 }
}
