"use strict";

import { world } from "../../src/world/world.js";
import { all_objects } from "../../utils/global-variables.js";

class LogItem extends HTMLElement {
    constructor(mass, x, y, ax, ay, vx, vy, particle){
        super()
        this.hide = true;
        this.mass = mass;
        this.x = x;
        this.y = y;
        this.ax = ax;
        this.ay = ay;
        this.vx = vx;
        this.vy = vy;
        this.particle = particle;
        this.attachShadow({mode: "open"})


        this.shadowRoot.innerHTML =

            `       <link rel="stylesheet" href="./components/log-item/log-item-style.css">
                    
                    <div class="box">

                        <div class="close" title="Delete this Particle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>

                        <div class="object-shape">
                            <div class="orbit-data"  style="color: white; margin-top: -35px;"> Orbit: true </div>
                            <div class="mass">1</div>
                        </div>

                        <div class="date">

                            <div class="top">
                                <span class="mass-number" > m= ${this.mass}</span>
                                <span class="xpos" > x= ${this.x}</span>
                                <span class="ypos" > y= ${this.y}</span>
                                <span class="acceleration-x"> vx= ${this.vx}</span>
                                <span class="acceleration-y"> vy= ${this.vy}</span>
                                <span class="speed-x" > ax= ${this.ax}</span>
                                <span class="speed-y" > ay= ${this.ay}</span>
                            </div>

                        </div>

                    </div>
                

            `
    }

    connectedCallback() {

        this.massSpan = this.shadowRoot.querySelector(".mass-number");
        this.massX = this.shadowRoot.querySelector(".xpos");
        this.massY = this.shadowRoot.querySelector(".ypos");
        this.massAx = this.shadowRoot.querySelector(".acceleration-x");
        this.massAy = this.shadowRoot.querySelector(".acceleration-y");
        this.massVx = this.shadowRoot.querySelector(".speed-x");
        this.massVy = this.shadowRoot.querySelector(".speed-y");
        this.orbitData = this.shadowRoot.querySelector(".orbit-data");


        const closeBtn = this.shadowRoot.querySelector(".close");

        closeBtn.addEventListener("click", ()=>{
            this.remove()
        })

    }

    disconnectedCallback() { 
        
        
        this.particle.remove();
    }

    update_UI(mass, x, y, vx, vy, ax, ay, notInOrbit){

        this.massSpan.textContent = "m= " + mass + " kg";
        this.massX.textContent = "x= " + Math.floor(x);
        this.massY.textContent = "y= " + Math.floor(y);
        this.massAx.textContent = "Ax= " + Math.floor(ax) + "  m/s^2";
        this.massAy.textContent = "Ay= " + Math.floor(ay) + "  m/s^2";
        this.massVx.textContent = "Vx= " + Math.floor(vx) + "  m/s";
        this.massVy.textContent = "Vy= " + Math.floor(vy) + "  m/s";
        if(!notInOrbit){
           this.orbitData.textContent = "Orbit: true";
        }else{
            this.orbitData.textContent = "Orbit: false";
        }
    }

}



export { LogItem };