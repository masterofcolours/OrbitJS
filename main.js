import { Particle } from "./src/class-objects/object.js";
import { Path } from "./components/path/path.js";
import { world } from "./src/world/world.js";
import { duration, G, play } from "./utils/global-variables.js";
import { distance } from "./src/world/math/distance.js";
import { all_objects } from "./utils/global-variables.js";
import { setOrbitalSpeed } from "./src/world/math/orbital-speed.js";
import { movement } from "./src/world/god-hands/movement.js";
import { Log } from "./components/log/log.js";
import { LogItem } from "./components/log-item/log-item.js";
import { TimeLine } from "./components/time-line/time-line.js";

window.customElements.define("space-object", Particle);
window.customElements.define("path-object", Path);
window.customElements.define("log-object", Log);
window.customElements.define("log-item", LogItem);
window.customElements.define("time-line", TimeLine);

let startBTN = document.querySelector('.start-button');
let playBTN = document.querySelector('.play');
let pauseBTN = document.querySelector('.pause');

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

startBTN.addEventListener('click', ()=>{
    play.value = true;
    pauseBTN.style.opacity= 0.7;
    initial_setup()
    durationFunction()
})

playBTN.addEventListener("click", ()=>{
    play.value = true;
    pauseBTN.style.opacity= 0.7;
    playBTN.style.opacity= 1;
})

pauseBTN.addEventListener("click", ()=>{
    play.value = false;
    playBTN.style.opacity= 0.7;
    pauseBTN.style.opacity= 1;
})


function initial_setup(){
    
    const object1 = new Particle( { mass: 900000, x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 } )
    
    const object2 = new Particle( { mass: 1, x: window.innerWidth / 2 - 100, y: window.innerHeight / 2 - 100, } )
    const object4 = new Particle( { mass: 1, x: window.innerWidth / 2 - 250, y: window.innerHeight / 2 - 250, } )
    const object3 = new Particle( { mass: 1, x : window.innerWidth / 2 - 200, y: window.innerHeight / 2 - 200, } )

    
    document.body.append(object1, object2, object3, object4)

    for(let obj of all_objects){
        if(obj !== object1){

            let res = setOrbitalSpeed(object1, obj)
            obj.V_X = res[0];
            obj.V_Y = res[1];
        }
    }

    movement()
    world()

    document.addEventListener("dblclick", ()=>{
    
})
    
}





