"use strict";

class CenterPoint extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

            `
                <link rel="stylesheet" href="./components/center-point/center-point.css">
                <div class="center-point">
                    <div class="vertical"></div>
                    <div class="horezintal"></div>
                    <p class="name"></p>
                </div>

            `
    }

    connectedCallback() {
        this.name = this.shadowRoot.querySelector(".name")
        
    }

    disconnectedCallback() { 
        

    }

}



export { CenterPoint };