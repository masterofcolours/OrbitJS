"use strict";
import { all_objects, logBox } from "../../utils/global-variables.js";
import { kinetic } from "../world/math/kinetic-energy.js";
import { potential_energy } from "../world/math/potential-energy.js";
import { Path } from "../../components/path/path.js";
import { LogItem } from "../../components/log-item/log-item.js";
import { orbit, SCALE } from "../world/math/orbit.js";
import { setOrbitalSpeed } from "../world/math/orbital-speed.js";
class Particle extends HTMLElement {
    constructor(data){
        super()

        if(data){            
            this.mass = data.mass || 0;
            this.speed = data.speed || 0;
            this.X = data.x || 0;
            this.Y = data.y || 0;
            this.V_X = data.vx || 0;
            this.V_Y = data.vy || 0;
            this.A_X = data.ax || 0;
            this.A_Y = data.ay || 0;
            this.Kinetic_E = kinetic(this, this.V_X, this.V_Y);
            this.logItem = new LogItem(this.mass, this.X, this.Y, this.V_X, this.V_Y, this.A_X, this.A_Y, this)
            this.orbit = null;
            this.notInOrbit = false;
        }

        this.div = null


        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

            `
                <link rel="stylesheet" href="./src/class-objects/object-style.css">
                <div class="mass">
                    <p></p>
                </div>
                <div class="orbit" ></div>

            `
    }

    connectedCallback() {

        all_objects.push(this);
        let index = this.shadowRoot.querySelector('p');
        index.textContent = all_objects.length;
        this.style.position = "absolute";
        this.style.transform = `translate(${this.X}px, ${this.Y}px)`;   
        
        this.div = this.shadowRoot.querySelector("div");

        logBox.logbox.append(this.logItem)
        
        this.logItem.shadowRoot.querySelector(".mass").textContent = all_objects.length;

        this.orbit = this.shadowRoot.querySelector(".orbit")
        
    }

    update(newData, dt) {        

        this.V_X += this.A_X * dt * 0.5;
        this.V_Y += this.A_Y * dt * 0.5;
        
        this.X  = this.X + (this.V_X * dt);
        this.Y  = this.Y + (this.V_Y * dt);
        
        this.A_X = newData[0];
        this.A_Y = newData[1];        
        
        this.V_X += this.A_X * dt * 0.5;
        this.V_Y += this.A_Y * dt * 0.5;
                 
        this.Kinetic_E = kinetic(this, this.V_X, this.V_Y);
        this.U = potential_energy(this);
        
        this.logItem.update_UI(this.mass, this.X, this.Y, this.V_X, this.V_Y, this.A_X, this.A_Y, this.notInOrbit)

        this.A_X = 0;
        this.A_Y = 0;

        if(this.notInOrbit){
            let pathitem = new Path(this.X, this.Y);
            document.body.append(pathitem);
        }
        

        this.style.transform = `translate(${this.X - 20 }px, ${this.Y - 20}px)`;

        this.updateOrbit()
    }


    updateOrbit(){
            for( let item of all_objects ){
                if(item.mass > this.mass){
                    
                    const result = orbit(this, item);

                    const orbitSpeed = setOrbitalSpeed(item, this);
                    
                    if(!result){
                        break;
                    }

                    this.orbit.style.display = "block";

                    
                    this.orbit.style.width  = `${result.a * 2 * SCALE}px`;
                    this.orbit.style.height = `${result.b * 2 * SCALE}px`;   

                    const offsetX = -result.c * Math.cos(result.rotation);
                    const offsetY = -result.c * Math.sin(result.rotation);

                    const centerX = item.X + offsetX;
                    const centerY = item.Y + offsetY;

                    const relativeCenterX = centerX - this.X;
                    const relativeCenterY = centerY - this.Y;
                    
                    this.orbit.style.transform = `
                        translate(${relativeCenterX - result.a * SCALE + 20}px, 
                                ${relativeCenterY - result.b * SCALE + 20}px)
                        rotate(${result.rotation}rad)
                    `;

                }

        }
    }

    disconnectedCallback() { 

        const index = all_objects.indexOf(this);
        all_objects.splice(index, 1);
        this.logItem.remove()

    }

}



export { Particle };