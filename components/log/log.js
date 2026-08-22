"use strict";

import { logBox } from "../../utils/global-variables.js";

class Log extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})

        this.hide = true;

        this.shadowRoot.innerHTML =

            `   
                <link rel="stylesheet" href="./components/log/log-style.css">
                <div class="side-panel">
                    <div class="outer-box">
                        <div class="log-panel-header">
                            <h2>Logs Panel</h2>
                        </div>

                        
                
                        <div class="flout-btns left-center" title="Logs Panel">
                            <svg width="20" height="20" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            `
    }

    connectedCallback() {

        let logsPanelBtn = this.shadowRoot.querySelector('.flout-btns');
        let box = this.shadowRoot.querySelector('.side-panel');
        let boxOuter = this.shadowRoot.querySelector('.outer-box');

        let svg = this.shadowRoot.querySelector("svg")

        logsPanelBtn.addEventListener("click", ()=>{
            
            if(this.hide){
                this.hide = false;
                box.style.width = "400px";
                boxOuter.style.width = "100%";
                svg.setAttribute("transform", "rotate(180)")
            }else{
                this.hide = true
                box.style.width = "0px";
                boxOuter.style.width = "0";
                svg.setAttribute("transform", "rotate(0)")
            }
        })

        logBox.logbox = this.shadowRoot.querySelector(".outer-box");
        
    }

    update() {

        

    }

    disconnectedCallback() { 

        

    }

}



export { Log };