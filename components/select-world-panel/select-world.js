import { durationFunction } from "../../functions/durationFunction.js";
import { scrollCenter } from "../../functions/ScrollCenter.js";
import { setInorbitUI } from "../../functions/setInorbitUI.js";
import { Particle } from "../../src/class-objects/object.js";
import { currentSun, currentWorld, play, selectPanelIsActive, selectsBTN, timerIsOn } from "../../utils/global-variables.js";

class SelectWorld extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = 
        `
            <link rel="stylesheet" href="./components/select-world-panel/select-world-style.css"> 
            <div class="main-box">

                <world-item src-link="solar-system.webp" name="Solar System">
                
                </world-item>

                <world-item src-link="trappist1.png" name="Trappist-1">
                
                </world-item>

                <div class="button-box">
                    <button class="start">Start</botton>
                </div>
            </div>

        `
    }

    connectedCallback(){

        const btn = this.shadowRoot.querySelector('.start');
        const pauseBTN = document.querySelector('.pause');
        const middleX = (document.documentElement.scrollWidth - window.innerWidth) / 2;
        const middleY = (document.documentElement.scrollHeight - window.innerHeight) / 2;
        const viewportWidth = document.documentElement.clientWidth / 2;
        const viewportHeight = document.documentElement.clientHeight / 2;
        const centerX = viewportWidth + middleX;
        const centerY = viewportHeight + middleY;
        
        this.style.left = centerX + "px";
        this.style.top = centerY + "px";
        
        scrollCenter(middleX, middleY);

        btn.addEventListener("click", ()=>{
            if(!play.value){
                play.value = true;
                pauseBTN.style.opacity= 0.7;
                if(!timerIsOn.value){
                    durationFunction()
                    timerIsOn.value = true;
                }
            }

            if(currentWorld.value){

                if(String(currentWorld.value).toLowerCase() === "solar system"){

                    const sun = new Particle({
                        mass: 9000000,
                        x: centerX,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    
                    const mercury = new Particle({
                        mass: 1.5,
                        x: centerX + 160,
                        y: centerY,
                        vx: 0,
                        vy: 12.45
                    });

                    const venus = new Particle({
                        mass: 22,
                        x: centerX + 230,
                        y: centerY,
                        vx: 0,
                        vy: 9.11
                    });

                    const earth = new Particle({
                        mass: 27,
                        x: centerX + 370,
                        y: centerY,
                        vx: 0,
                        vy: 7.75
                    });

                    const mars = new Particle({
                        mass: 3,
                        x: centerX + 629,
                        y: centerY,
                        vx: 0,
                        vy: 6.28
                    });

                    
                    const jupiter = new Particle({
                        mass: 8590,
                        x: centerX + 880,
                        y: centerY,
                        vx: 0,
                        vy: 3.40
                    });

                    const saturn = new Particle({
                        mass: 2570,
                        x: centerX + 1431,
                        y: centerY,
                        vx: 0,
                        vy: 2.51
                    });

                    const uranus = new Particle({
                        mass: 392,
                        x: centerX + 2879,
                        y: centerY,
                        vx: 0,
                        vy: 1.77
                    });

                    const neptune = new Particle({
                        mass: 462,
                        x: centerX + 4510,
                        y: centerY,
                        vx: 0,
                        vy: 1.41
                    });

                    document.body.append(
                        sun, 
                        mercury, 
                        venus, 
                        earth,
                        mars,
                        jupiter,
                        saturn,
                        uranus,
                        neptune,

                    );

                    currentSun.value = sun;
                    setInorbitUI();
                    scrollCenter(middleX, middleY);
                    selectPanelIsActive.value = false;
                    this.remove();
                    selectsBTN.length = 0;
                }
                
                if(String(currentWorld.value).toLowerCase() === "trappist-1"){

                    const trappist1 = new Particle({
                        mass: 808200,
                        x: centerX,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    const planetB = new Particle({
                        mass: 37,
                        x: centerX + 783,
                        y: centerY,
                        vx: 0,
                        vy: 1.02
                    });

                    const planetC = new Particle({
                        mass: 35,
                        x: centerX + 1072,
                        y: centerY,
                        vx: 0,
                        vy: 0.87
                    });

                    const planetD = new Particle({
                        mass: 10.5,
                        x: centerX + 1511,
                        y: centerY,
                        vx: 0,
                        vy: 0.73
                    });

                    const planetE = new Particle({
                        mass: 19,
                        x: centerX + 1985,
                        y: centerY,
                        vx: 0,
                        vy: 0.64
                    });

                    const planetF = new Particle({
                        mass: 28,
                        x: centerX + 2612,
                        y: centerY,
                        vx: 0,
                        vy: 0.56
                    });

                    const planetG = new Particle({
                        mass: 36,
                        x: centerX + 3178,
                        y: centerY,
                        vx: 0,
                        vy: 0.50
                    });

                    const planetH = new Particle({
                        mass: 9,
                        x: centerX + 4200,
                        y: centerY,
                        vx: 0,
                        vy: 0.44
                    });

                    document.body.append(
                        trappist1,
                        planetB,
                        planetC,
                        planetD,
                        planetE,
                        planetF,
                        planetG,
                        planetH,
                    );

                    currentSun.value = trappist1;
                    setInorbitUI();
                    scrollCenter(middleX, middleY);
                    selectPanelIsActive.value = false;
                    this.remove();
                    selectsBTN.length = 0;
                }

            }else{
                
            }
        })

    }
}

export { SelectWorld }