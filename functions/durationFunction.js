import { play, duration } from "../utils/global-variables.js";

function durationFunction(){

    let timeBox = document.querySelector(".time");

    setInterval(()=>{
        
        if(play.value){
            duration.sec += 1

            if(duration.sec === 60){
                duration.sec = 0;
                duration.min += 1;
            }
            
            timeBox.textContent = `00:${duration.min > 9 ?duration.min : "0"+ duration.min}:${duration.sec > 9 ? duration.sec : "0"+duration.sec}`
        }
        
    }, 1000)
    
}

export { durationFunction }