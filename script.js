//var firstname = "Jack";
//var age = 21;
//var price = 21.23;

//document.getElementById("myh1").innerHTML = `my name is ${firstname}.,    `;
//document.getElementById("myh2").innerHTML = `my age is ${age}.`;
//document.getElementById("myh3").innerHTML = `i spend ${price} today.`;


//var username;
//document.getElementById("btn").onclick = function(){
//username=document.getElementById("name").value;
//document.getElementById("display").textContent=username;
//}; 

//number guessing game
// var max = 100;
// var min = 50;
// var ans = Math.random() +(max - min + 1);
// console.log(ans);

//counter program
const decrBtn = document.getElementById("decBtn");
const  resetBtn = document.getElementById("resetBtn");
const incrBtn = document.getElementById("incBtn");
const lab = document.getElementById("countLabel");

let count = 0;
incrBtn.onclick = function(){
    count ++;
    lab.textContent = count;
}

decrBtn.onclick = function() {
    count --;
    lab.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    lab.textContent = count;
}


