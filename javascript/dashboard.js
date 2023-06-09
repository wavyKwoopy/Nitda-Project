
// function testin() {
//     console.log("hovering in the sidebar")
// }
  
// function testout() {
//     console.log("hovering outside sidebar");
// }

var mini = true;
function toggleSidebar() {
if (mini) {
console.log("opening sidebar");
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
this.mini = false;
} else {
console.log("closing sidebar");
document.getElementById("mySidebar").style.width = "80px";
document.getElementById("main").style.marginLeft = "80px";
this.mini = true;
 }
}

let targetCircle = document.querySelector('.sidebar');

function biggerCircle () {
    targetCircle.style.width = '40rem'
    targetCircle.style.height = '40rem'
};

function smallerCircle () {
    targetCircle.style.width = '35rem'
    targetCircle.style.height = '35rem'
};