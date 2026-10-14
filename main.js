import { Particle } from "./src/class-objects/object.js";
import { world } from "./src/world/world.js";
import { about, isCameraActive, mainSettings, play, timeLine } from "./utils/global-variables.js";
import { Log } from "./components/log/log.js";
import { LogItem } from "./components/log-item/log-item.js";
import { TimeLine } from "./components/time-line/time-line.js";
import { backward } from "./functions/backward-timeline.js";
import { forwardTimeLine } from "./functions/forward-timeline.js";
import { contextmenu } from "./components/context-menu-component/contextmenu-component.js";
import { CenterPoint } from "./components/center-point/center-point.js";
import { removeAllParticles } from "./functions/remove-particles.js";
import { AlertBox } from "./components/alert/alert.js";
import { ArrowKeys } from "./components/arrow-keys/arrow-keys.js";
import { leftClickOnWorld } from "./src/world/god-hands/movement-in-world.js";
import { SelectWorld } from "./components/select-world-panel/select-world.js";
import { WorldItem } from "./components/world-item/world-item.js"; 
import { AboutME } from "./components/about-me/about-me.js";
import  listeners  from "./src/world/god-hands/movement.js";
import { loadFunctios } from "./functions/LoadFunction.js";
import { settingMian } from "./components/globall-settings/settings.js";
world();
leftClickOnWorld();
listeners();
window.customElements.define("space-object", Particle);
window.customElements.define("log-object", Log);
window.customElements.define("log-item", LogItem);
window.customElements.define("time-line", TimeLine);
window.customElements.define("context-menu", contextmenu);
window.customElements.define("center-point", CenterPoint);
window.customElements.define("alert-box", AlertBox);
window.customElements.define("arrow-keys", ArrowKeys);
window.customElements.define("select-world", SelectWorld);
window.customElements.define("world-item", WorldItem);
window.customElements.define("about-me", AboutME);
window.customElements.define("setting-component", settingMian);

const startBTN = document.querySelector('.start-button');
const playBTN = document.querySelector('.play');
const pauseBTN = document.querySelector('.pause');
const removeBTN = document.querySelector('.remove');
const cameraBTN = document.querySelector('.camera-off');
const gitBTN = document.querySelector('.git');
const setting = document.querySelector('.setting');


backward();
forwardTimeLine();

window.addEventListener("load", ()=>{
    loadFunctios();
})

startBTN.addEventListener('click', ()=>{
    loadFunctios();
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
    removeAllParticles();
})

cameraBTN.addEventListener('click', ()=>{
    isCameraActive.object = null;
    cameraBTN.style.display = "none";
})

gitBTN.addEventListener('click', ()=>{
    if(!about.aboutIsOn){
        const newAboutCart = new AboutME();
        document.body.append(newAboutCart);
        about.aboutIsOn = true;
    }
})

setting.addEventListener("click", ()=>{    
    if(!mainSettings.isON){
        const newMainSetting = new settingMian();
        document.body.append(newMainSetting);
    }
})






