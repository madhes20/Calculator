let buttons = document.querySelectorAll('.btn');
let screen = document.querySelector('.display');
let result = document.querySelector('.res');
let clear = document.querySelector('.clear');

let num = [];

clear.addEventListener('click',function(){
    num = "";
    screen.value=num; 
})

result.addEventListener('click',function(){
    screen.value=eval(num); 
})

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        num  = num + button.innerHTML;
        screen.value = num;
        console.log(button.innerHTML);
    })
})

