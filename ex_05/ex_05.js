function displayCurrentTime() {
const actuelle = new Date();
const heures = actuelle.getHours().toString().padStart(2, '0');
const minutes = actuelle.getMinutes().toString().padStart(2, '0');
const seconde = actuelle.getSeconds().toString().padStart(2, '0');  
const total = "Il est " + heures + ":" + minutes + ":" + seconde + ".";
document.getElementById('timeDisplay').textContent = total;}
setInterval(displayCurrentTime, 1000);