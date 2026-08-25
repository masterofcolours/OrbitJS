"use strict";
import { all_objects, duration, logBox } from "../../utils/global-variables.js";
import { kinetic } from "../world/math/kinetic-energy.js";
import { potential_energy } from "../world/math/potential-energy.js";
import { Path } from "../../components/path/path.js";
import { LogItem } from "../../components/log-item/log-item.js";
import { orbit, SCALE } from "../world/math/orbit.js";
import { setOrbitalSpeed } from "../world/math/orbital-speed.js";
// import { current_object, first_X, first_Y, interval, isMousDown, x_offset, y_offset } from "../world/god-hands/movement.js";
let current_object = {target: null};
let duration_time = 0
let isMousDown = {state: false};
let x_offset = {val: 0};
let y_offset = {val: 0};
let first_X = {val: 0};
let first_Y = {val: 0};
let interval = null;

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
        
        setEventForAllObject(this)
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
        
        
        this.logItem.update_UI(this.mass, this.X, this.Y, this.V_X, this.V_Y, this.A_X, this.A_Y, this.U, this.Kinetic_E, this.notInOrbit)
        
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

        let sun = all_objects.reduce((beforMass, nextMass)=>{

            if(beforMass.mass){

                if(beforMass.mass > nextMass.mass){
                    return beforMass;
                }else{
                    return nextMass;
                }

            }else{

                if(beforMass > nextMass.mass){
                    return beforMass;
                }else{
                    return nextMass;
                }
            }

        }, 1)

        sun.orbit.style.display = "none";
            
                
    const result = orbit(this, sun);
                        
        if(result){
            this.orbit.style.display = "block";
            
            
            this.orbit.style.width  = `${result.a * 2 * SCALE}px`;
            this.orbit.style.height = `${result.b * 2 * SCALE}px`;   

            const offsetX = -result.c * Math.cos(result.rotation);
            const offsetY = -result.c * Math.sin(result.rotation);

            const centerX = sun.X + offsetX;
            const centerY = sun.Y + offsetY;

            const relativeCenterX = centerX - this.X;
            const relativeCenterY = centerY - this.Y;
            
            this.orbit.style.transform = 
            `
                translate(${relativeCenterX - result.a * SCALE + 20}px, 
                        ${relativeCenterY - result.b * SCALE + 20}px)
                rotate(${result.rotation}rad)
            `;


            if( Number(this.orbit.style.height.replace("px", "")) < 80){
                this.orbit.style.borderColor = "red"
            }else{
                
                this.orbit.style.borderColor = "white"
            }
            
        }


        
    }

    disconnectedCallback() { 

        const index = all_objects.indexOf(this);
        all_objects.splice(index, 1);
        this.logItem.remove()
    }
    
}


function setEventForAllObject (root){

    function debounce(){
        if(current_object.target){
            interval = setInterval(()=>{
                if (!current_object.target) {
                    return;
                }
                
                first_X.val = current_object.target.X;
                first_Y.val = current_object.target.Y;

            }, 500)
        }
    }

    root.addEventListener("mousedown", (event)=>{
        if(event.target === root){
            root.orbit.style.opacity = 0.0
            current_object.target = root;
            isMousDown.state = true;
            const rect = root.getBoundingClientRect()
            current_object.target.V_X = 0;
            current_object.target.V_Y = 0;
            first_X.val = current_object.target.X;
            first_Y.val = current_object.target.Y;
            duration_time = Date.now()
            x_offset.val = Math.floor(event.clientX - rect.left);
            y_offset.val = Math.floor(event.clientY - rect.top);
            debounce();
        }

    })

}



export { Particle, 
    current_object,
    duration_time,
    isMousDown,
    x_offset,
    y_offset,
    first_X,
    first_Y,
    interval,
 };