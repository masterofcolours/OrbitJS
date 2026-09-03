"use strict";
import { all_objects, logBox } from "../../utils/global-variables.js";
import { kinetic } from "../world/math/kinetic-energy.js";
import { potential_energy } from "../world/math/potential-energy.js";
import { Path } from "../../components/path/path.js";
import { LogItem } from "../../components/log-item/log-item.js";
import { orbit, SCALE } from "../world/math/orbit.js";
import { CenterPoint } from "../../components/center-point/center-point.js";
import { dimensions } from "../world/math/dimensions.js";
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
            this.logItem = new LogItem(this.mass, this.X, this.Y, this.V_X, this.V_Y, this.A_X, this.A_Y, 0, 0,this)
            this.orbit = null;
            this.notInOrbit = false;
            this.centerOrbitPoint = new CenterPoint();
            this.divMass;
            this.width;
            this.height;
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

        this.divMass = this.shadowRoot.querySelector(".mass");

        const firstDimensions = dimensions(this);

        this.width = firstDimensions.widthValue;
        this.height = firstDimensions.heightValue;
        
        all_objects.push(this);
        let index = this.shadowRoot.querySelector('p');
        index.textContent = all_objects.length;
        this.style.position = "absolute";
        this.style.transform = `translate(${this.X}px, ${this.Y}px)`;   
        
        this.div = this.shadowRoot.querySelector("div");
        
        logBox.logbox.append(this.logItem);
        
        this.divMass.textContent = all_objects.length;

        this.logItem.particle = this;
        
        this.orbit = this.shadowRoot.querySelector(".orbit");
        
        document.body.append(this.centerOrbitPoint);        
        this.centerOrbitPoint.name.textContent = "C" + all_objects.length;

        setEventForAllObject(this);


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

        let dimensionsResult = dimensions(this);
        
        this.width = dimensionsResult.widthValue;
        this.height = dimensionsResult.heightValue;

        this.divMass.style.width = dimensionsResult.widthValue + "px";
        this.divMass.style.height = dimensionsResult.heightValue + "px";
        
        this.style.transform = `translate(${this.X - this.width/2 }px, ${this.Y - this.height/2}px)`;
        
        this.updateOrbit()


    }

    
    updateOrbit(){

        let sun = all_objects.reduce((maxObj, currentObj) => {
                return (currentObj.mass > maxObj.mass) ? currentObj : maxObj;
        });

        sun.orbit.style.display = "none";
        sun.centerOrbitPoint.style.display = "none";
            
                
    const result = orbit(this, sun);

    let cx = null
    let cy = null
                        
    if(result){

        this.orbit.style.display = "block";
        this.centerOrbitPoint.style.display = "block";
        
        this.orbit.style.width  = `${result.a * 2 * SCALE}px`;
        this.orbit.style.height = `${result.b * 2 * SCALE}px`;   
        const offsetX = -result.c * Math.cos(result.rotation);
        const offsetY = -result.c * Math.sin(result.rotation);
        const centerX = sun.X + offsetX;
        const centerY = sun.Y + offsetY;
        cx = centerX - 10
        cy = centerY - 10
        const relativeCenterX = centerX - this.X;
        const relativeCenterY = centerY - this.Y;
        
        this.orbit.style.transform = 
        `
            translate(${relativeCenterX - result.a * SCALE + this.width/2}px, 
                    ${relativeCenterY - result.b * SCALE + this.height/2}px)
            rotate(${result.rotation}rad)
        `
        ;            
        
        this.centerOrbitPoint.style.left = cx + "px";
        this.centerOrbitPoint.style.top = cy  + "px";            
        
        if( (result.a - (result.c + sun.width/2)) < this.width/2 ){
            this.orbit.style.borderColor = "red";
            this.shadowRoot.querySelector(".mass").classList.add("warning")
        }else{
            this.orbit.style.borderColor = "white";
            this.shadowRoot.querySelector(".mass").classList.remove("warning")
        }
        return;
        
    }

        this.shadowRoot.querySelector(".mass").classList.remove("warning")
        
    }

    disconnectedCallback() { 
        const index = all_objects.indexOf(this);
        all_objects.splice(index, 1);
        this.logItem.remove();
        this.centerOrbitPoint.remove()
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