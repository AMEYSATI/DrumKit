 for(var i=0;i<document.querySelectorAll(".drum").length;i++)
 {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function()
    {
       var but = this.innerHTML;
       switch(but)
       {
            case 'w':
                var pl = new Audio("sounds/tom-1.mp3");
                pl.play();
                break;
            case 'a':
                var pl = new Audio("sounds/tom-2.mp3");
                pl.play();
                break;
            case 's':
                var pl = new Audio("sounds/tom-3.mp3");
                pl.play();
                break;
            case 'd':
                var pl = new Audio("sounds/tom-4.mp3");
                pl.play();
                break;
            case 'j':
                var pl = new Audio("sounds/crash.mp3");
                pl.play();
                break;    
            case 'k':
                var pl = new Audio("sounds/kick-bass.mp3");
                pl.play();
                break;
            case 'l':
                var pl = new Audio("sounds/snare.mp3");
                pl.play();
                break;

       }
    });
 }
 

 
