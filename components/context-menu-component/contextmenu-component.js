"use strict";

import { removeAllParticles } from "../../functions/remove-particles.js";
import { Particle } from "../../src/class-objects/object.js";
import { all_objects } from "../../utils/global-variables.js";

class contextmenu extends HTMLElement {
    constructor(left, top){
        super()

        this.left = left;
        this.top = top;

        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

            `
                <link rel="stylesheet" href="./components/context-menu-component/contextmenu-style.css">
                <div class="contextmenu">
                    <div class="add-icon" ><p>+</p></div>
                    <div class="item add"> Add new Particle</div>
                    <div class="item remove">Remove all Praticles</div>
                </div>

            `
    }

    connectedCallback() {

        let x = null;
        let y = null;

        const addNewParticleElem = this.shadowRoot.querySelector(".add");
        const removeNewParticleElem = this.shadowRoot.querySelector(".remove");

        document.addEventListener("contextmenu", (event)=>{
            event.preventDefault()
            this.style.display = "flex";
            this.style.top = event.clientY + 20 + "px";
            this.style.left = event.clientX + 20 + "px";
            x = event.clientX + 20;
            y = event.clientY + 20;
        
            
        })

        document.addEventListener('click', (event)=>{
            if(!this.contains(event.target)){
                this.style.display = "none";
            }
        })

        addNewParticleElem.addEventListener("click", ()=>{
            const newParticle = new Particle({ mass: 1, x: x-20, y: y-20, })
            document.body.append(newParticle)
            
        })

        removeNewParticleElem.addEventListener("click", ()=>{
            removeAllParticles()
        })

    }

    

}



export { contextmenu };