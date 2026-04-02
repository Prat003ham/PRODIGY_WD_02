var isStop = true;  //stop watch is stopped
var sec = 0;
var min = 0;
var hour = 0;    
function start()
{
    if(isStop==true)    
    {
         isStop = false;     //it start the stop watch
         timer();
    }
}

function timer()
{
     if(isStop == false)    //check if the watch is running or not
     {  
        sec = parseInt(sec);   
        min = parseInt(min);
        hour = parseInt(hour);
        sec++;
        if(sec==60)
        {
            sec = 0;
            min++;
        }

        if(min==60)
        {
            min = 0;
            hour++;
        }

        if(sec < 10)
        {
            sec = "0" + sec;
        }
        if(min < 10)
        {
            min = "0" + min;
        }
        if(hour < 10)
        {
            hour = "0" + hour;
        }

        Stopwatch.innerHTML = hour + " : " + min + " : " + sec ;
        setTimeout("timer()",1000);   // calls itself after every 1000 miliseconds
     }
}
function stop()
{
    isStop = true;
}

function reset()
{
    isStop = true;
    sec = 0;
    min = 0;
    hour = 0;

    Stopwatch.innerHTML = "00 : 00 : 00";
}