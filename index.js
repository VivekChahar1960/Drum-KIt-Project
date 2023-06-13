
var noofbtn=document.querySelectorAll(".drum").length;
for (var i=0; i<noofbtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){

        var n=this.innerHTML;
        switchst(n);
        btnclicked(n);
    });

    

}
document.addEventListener("keypress" ,function(event){
    var n = event.key;
    if(n === n.toUpperCase()){
        
    }else{
        n=n.toUpperCase();
    }
    switchst(n);
    btnclicked(event.key);

});

    
function switchst(key){
    switch (key) {
        case "W":
                var audio= new Audio('kick-bass.mp3');
                audio.play();
            break;
        case "A":
                var audio= new Audio('crash.mp3');
                audio.play();
            break;
        case "S":
                var audio= new Audio('tom-1.mp3');
                audio.play();
            break;
        case "D":
                var audio= new Audio('tom-2.mp3');
                audio.play();
            break;
        case "J":
                var audio= new Audio('tom-3.mp3');
                audio.play();
            break;
        case "K":
                var audio= new Audio('tom-4.mp3');
                audio.play();
            break;
        case "L":
                var audio= new Audio('snare.mp3');
                audio.play();
            break;
        default:
            break;
    }
    
}
function btnclicked(currentkey){
    var a=document.querySelector("."+currentkey);
    a.classList.add("pressed");

    setTimeout(func,100);
    function func(){
            a.classList.remove("pressed");
    }
}

