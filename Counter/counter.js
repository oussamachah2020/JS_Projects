//<-strat from the value of 0->

let count = 0;

//<-Select all the buttons with a commun class->

const buttons = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

//<-work on every button and give it its own functionality->

buttons.forEach(function(btn) {
    btn.addEventListener("click",function(e) {
        const roles = e.currentTarget.classList;
        if(roles.contains('decrease')) {
            count--;
        }
        if(roles.contains('increase')) {
            count++;
        }
        if(roles.contains('restart')) {
            count = 0;
            value.style.color = "black";
        }
        else if(count < 0) {
            value.style.color = "red";
        }else if(count > 0) {
            value.style.color = "green";
        }
        value.textContent = count; //<-change the number->
    })
})