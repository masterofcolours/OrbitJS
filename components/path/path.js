"use strict";

class Path extends HTMLElement {
    constructor(left, top){
        super()

        this.left = left;
        this.top = top;

        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

            `
                <link rel="stylesheet" href="./components/path/path.css">
                <div class="path">
                    
                </div>

            `
    }

    connectedCallback() {

        this.style.left = this.left + "px";
        this.style.top = this.top + "px";

        setTimeout(() => {
            this.remove()
        }, 1000);
        
    }

    update() {

        

    }

    disconnectedCallback() { 

        

    }

}



export { Path };