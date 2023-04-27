var screen=document.getElementById('screen');
var btn=document.querySelectorAll('.button');
for(item of btn){
    item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
    if(btntext=='×'){
        btntext='*';
    }
    if(btntext=='÷'){
        btntext='/';
    }
    screen.value+=btntext;
});
}
function Sin(){
    screen.value=Math.sin(screen.value);
}
function Cos(){
    screen.value=Math.cos(screen.value);
}
function Tan(){
    screen.value=Math.tan(screen.value);
}
function Log(){
    screen.value=Math.log(screen.value);
}
function Pow(){
    screen.value=Math.pow(screen.value,2);
}
function Sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function Pi(){
    screen.value=3.14159265359;
}
function e(){
    screen.value=2.71828;
}
function fact(){
    var num=screen.value;
    if(num<0){
        screen.value=-1;
    }
    else if(num==0){
        screen.value=1;
    }
    else{
        screen.value=(num*(num-1));
    }
}
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}