import { durationFunction } from "../../functions/durationFunction.js";
import { scrollCenter } from "../../functions/ScrollCenter.js";
import { setInorbitUI } from "../../functions/setInorbitUI.js";
import { alertBox, Particle } from "../../src/class-objects/object.js";
import { currentSun, currentWorld, play, selectPanelIsActive, selectsBTN, timerIsOn } from "../../utils/global-variables.js";
import { AlertBox } from "../alert/alert.js";

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

                <world-item src-link="kapler90.avif" name="Kapler-90">
                
                </world-item>

                <world-item src-link="3-body.jpg" name="3 Body">
                
                </world-item>

                <div class="button-box">
                    <button class="start">Start</botton>
                </div>
            </div>

        `
    }

    configFunction(sun){
        const middleX = (document.documentElement.scrollWidth - window.innerWidth) / 2;
        const middleY = (document.documentElement.scrollHeight - window.innerHeight) / 2;
        currentSun.value = sun;
        setInorbitUI();
        scrollCenter(middleX, middleY);
        selectPanelIsActive.value = false;
        this.remove();
        selectsBTN.length = 0;
        
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
                    });

                    
                    const mercury = new Particle({
                        mass: 1.5,
                        x: centerX + 160,
                        y: centerY,
                        
                    });

                    const venus = new Particle({
                        mass: 22,
                        x: centerX + 230,
                        y: centerY,
                        
                    });

                    const earth = new Particle({
                        mass: 27,
                        x: centerX + 370,
                        y: centerY,
                        
                    });

                    const mars = new Particle({
                        mass: 3,
                        x: centerX + 629,
                        y: centerY,
                        
                    });

                    
                    const jupiter = new Particle({
                        mass: 8590,
                        x: centerX + 880,
                        y: centerY,
                        
                    });

                    const saturn = new Particle({
                        mass: 2570,
                        x: centerX + 1431,
                        y: centerY,
                        
                    });

                    const uranus = new Particle({
                        mass: 392,
                        x: centerX + 2879,
                        y: centerY,
                        
                    });

                    const neptune = new Particle({
                        mass: 462,
                        x: centerX + 4510,
                        y: centerY,
                        
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

                    this.configFunction(sun);
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
                        vy: 0
                    });

                    const planetC = new Particle({
                        mass: 35,
                        x: centerX + 1072,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    const planetD = new Particle({
                        mass: 10.5,
                        x: centerX + 1511,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    const planetE = new Particle({
                        mass: 19,
                        x: centerX + 1985,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    const planetF = new Particle({
                        mass: 28,
                        x: centerX + 2612,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    const planetG = new Particle({
                        mass: 36,
                        x: centerX + 3178,
                        y: centerY,
                        vx: 0,
                        vy: 0
                    });

                    const planetH = new Particle({
                        mass: 9,
                        x: centerX + 4200,
                        y: centerY,
                        vx: 0,
                        vy: 0
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

                    this.configFunction(trappist1);
                    
                }


                if(String(currentWorld.value).toLowerCase() === "kapler-90"){

                    const kepler90Star = new Particle({ mass: 10000000, x: centerX, y: centerY, vx: 0, vy: 0 });
                    const kepler90b = new Particle({ mass: 200,   x: centerX + 500,  y: centerY,       vx: 0,     vy: 0 });
                    const kepler90c = new Particle({ mass: 250,   x: centerX,        y: centerY - 750,  vx: 0,  vy: 0    });
                    const kepler90i = new Particle({ mass: 220,   x: centerX - 1000, y: centerY,       vx: 0,     vy: 0 });
                    const kepler90d = new Particle({ mass: 1500,  x: centerX,        y: centerY + 1500, vx: 0, vy: 0    });
                    const kepler90e = new Particle({ mass: 1800,  x: centerX + 2100, y: centerY,       vx: 0,     vy: 0 });
                    const kepler90f = new Particle({ mass: 2000,  x: centerX - 2800, y: centerY,       vx: 0,     vy: 0 });
                    const kepler90g = new Particle({ mass: 12000, x: centerX,        y: centerY - 3600, vx: 0,  vy: 0    });
                    const kepler90h = new Particle({ mass: 15000, x: centerX + 4400, y: centerY,       vx: 0,     vy: 0 });

                    
                    document.body.append(
                        kepler90Star,
                        kepler90b,
                        kepler90c,
                        kepler90i,
                        kepler90d,
                        kepler90e,
                        kepler90f,
                        kepler90g,
                        kepler90h
                    );

                    this.configFunction(kepler90Star);
                }


                if(String(currentWorld.value).toLowerCase() === "3 body"){
                    const starA = new Particle({
                        mass: 6000000,
                        x: centerX - 200,
                        y: centerY,
                    });

                    const starB = new Particle({
                        mass: 1000000,
                        x: centerX + 300,
                        y: centerY,
                    });

                    const planet = new Particle({
                        mass: 1000,
                        x: centerX + 3500,
                        y: centerY,
                    });

                    document.body.append(starA, starB, planet);

                    this.configFunction(starA);

                }


            }else{
                const newAlert = new AlertBox("You have not selected any planetary system yet!", "alert");
                alertBox.append(newAlert);
            }
        })

    }
}

export { SelectWorld }