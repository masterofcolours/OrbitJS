"use strict";

class TimeLine extends HTMLElement {
    constructor(){
        super()
        
        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

        `
            <link rel="stylesheet" href="./components/time-line/timeline.css">
            <div class="timelinebox">

                <div class="horizental"></div>

                <div class="line">
                
                </div>
                
                <div class="horizental"></div>
                
                <p class="time-name"> Time <br> Line </p>

            </div>

        `

    }

    connectedCallback() {

    }

    update() {
        
    }

}



export { TimeLine };