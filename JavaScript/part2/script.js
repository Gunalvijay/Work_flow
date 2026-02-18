const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const counterlabel = document.getElementById("counterlabel");

let count = 0;

increasebtn.onclick = function(){
    count++;
    counterlabel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    counterlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    counterlabel.textContent = count;
}
