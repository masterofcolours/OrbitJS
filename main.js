import { Particle } from "./src/class-objects/object.js";
import { Path } from "./components/path/path.js";
import { world } from "./src/world/world.js";
import { currentSun, duration, isCamerAactive, play, selectPanelIsActive, timeLine, timerIsOn } from "./utils/global-variables.js";
import { all_objects } from "./utils/global-variables.js";
import { movement } from "./src/world/god-hands/movement.js";
import { Log } from "./components/log/log.js";
import { LogItem } from "./components/log-item/log-item.js";
import { TimeLine } from "./components/time-line/time-line.js";
import { backward } from "./functions/backward-timeline.js";
import { forwardTimeLine } from "./functions/forward-timeline.js";
import { contextmenu } from "./components/context-menu-component/contextmenu-component.js";
import { CenterPoint } from "./components/center-point/center-point.js";
import { removeAllParticles } from "./functions/remove-particles.js";
import { AlertBox } from "./components/alert/alert.js";
import { setOrbitalSpeed } from "./src/world/math/jsCods/orbit-speed.js";
import { ArrowKeys } from "./components/arrow-keys/arrow-keys.js";
import { leftClickOnWorld } from "./src/world/god-hands/movement-in-world.js";
import { SelectWorld } from "./components/select-world-panel/select-world.js";
import { WorldItem } from "./components/world-item/world-item.js"; 
// import { zoom } from "./src/world/god-hands/zoom.js";

world();
leftClickOnWorld();
movement()
window.customElements.define("space-object", Particle);
window.customElements.define("path-object", Path);
window.customElements.define("log-object", Log);
window.customElements.define("log-item", LogItem);
window.customElements.define("time-line", TimeLine);
window.customElements.define("context-menu", contextmenu);
window.customElements.define("center-point", CenterPoint);
window.customElements.define("alert-box", AlertBox);
window.customElements.define("arrow-keys", ArrowKeys);
window.customElements.define("select-world", SelectWorld);
window.customElements.define("world-item", WorldItem);

const startBTN = document.querySelector('.start-button');
const playBTN = document.querySelector('.play');
const pauseBTN = document.querySelector('.pause');
const removeBTN = document.querySelector('.remove');
const cameraBTN = document.querySelector('.camera-off');
// const zoomUp = document.querySelector('.zoom-up');
// const zoomIn = document.querySelector('.zoom-in');

backward()
forwardTimeLine()


startBTN.addEventListener('click', ()=>{
    // play.value = true;
    // pauseBTN.style.opacity= 0.7;
    // initial_setup()
    // if(!timerIsOn.value){
    //     durationFunction()
    //     timerIsOn.value = true;
    // }

    if(!selectPanelIsActive.value){
        const newPanel = new SelectWorld();
        document.body.append(newPanel);
        selectPanelIsActive.value = true;
    }



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

// zoomUp.addEventListener("click", ()=>{
//     if(zoomRange.value <= 5){
//         zoomRange.value -= 0.1;
//         zoom("zoom-up");
//     }
// })

// zoomIn.addEventListener("click", ()=>{
//     if(zoomRange.value >= 0){
//         zoomRange.value += 0.1;
//         zoom("zoom-in");
//     }
// })

function initial_setup(){
    
}






