let nbr = 0;

function loaded() {
    console.log("Loaded");
    display();
}
function plus() {
}
function minus() {
}
function display() {
    let ctrl = document.getElementById("nbr") as HTMLInputElement;
    ctrl.value=nbr.toString();
}