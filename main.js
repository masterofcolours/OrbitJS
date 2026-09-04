import { Particle } from "./src/class-objects/object.js";
import { Path } from "./components/path/path.js";
import { world } from "./src/world/world.js";
import { duration, isCamerAactive, play, timeLine } from "./utils/global-variables.js";
import { all_objects } from "./utils/global-variables.js";
import { setOrbitalSpeed } from "./src/world/math/orbital-speed.js";
import { movement } from "./src/world/god-hands/movement.js";
import { Log } from "./components/log/log.js";
import { LogItem } from "./components/log-item/log-item.js";
import { TimeLine } from "./components/time-line/time-line.js";
import { backward } from "./functions/backward-timeline.js";
import { forwardTimeLine } from "./functions/forward-timeline.js";
import { contextmenu } from "./components/context-menu-component/contextmenu-component.js";
import { CenterPoint } from "./components/center-point/center-point.js";
import { removeAllParticles } from "./functions/remove-particles.js";

window.customElements.define("space-object", Particle);
window.customElements.define("path-object", Path);
window.customElements.define("log-object", Log);
window.customElements.define("log-item", LogItem);
window.customElements.define("time-line", TimeLine);
window.customElements.define("context-menu", contextmenu);
window.customElements.define("center-point", CenterPoint);

const startBTN = document.querySelector('.start-button');
const playBTN = document.querySelector('.play');
const pauseBTN = document.querySelector('.pause');
const removeBTN = document.querySelector('.remove');
const cameraBTN = document.querySelector('.camera-off');
const numberOfParticles = document.querySelector('.number-of-particles');

backward()
forwardTimeLine()

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
    timeLine.forward = [];
})

pauseBTN.addEventListener("click", ()=>{
    play.value = false;
    playBTN.style.opacity= 0.7;
    pauseBTN.style.opacity= 1;
})

removeBTN.addEventListener("click", ()=>{
    removeAllParticles()
    
})

cameraBTN.addEventListener('click', ()=>{
    isCamerAactive.object = null;
    cameraBTN.style.display = "none";
})

function initial_setup(){
    
    const object1 = new Particle( { mass: 9000000, x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 } )
    const object2 = new Particle( { mass: 9000, x: window.innerWidth / 2 - 190, y: window.innerHeight / 2 - 190, } )
    const object3 = new Particle( { mass: 1000, x : window.innerWidth / 2 - 100, y: window.innerHeight / 2 - 100, } )

    
    document.body.append(object1, object2, object3)

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





