import { alertBox } from "../../src/class-objects/object.js";
import { currentWorld, selectsBTN } from "../../utils/global-variables.js";
import { AlertBox } from "../alert/alert.js";

class WorldItem extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = 
        `
            <link rel="stylesheet" href="./components/world-item/world-item-style.css"> 
            <div class="main-box">

                <div class="pic-box" style="background-image: Url('./pics/${this.getAttribute("src-link")}')">
                    
                </div>
                <p>${this.getAttribute("name")}</p>

                <button>Select</button>

            </div>

        `
    }

    connectedCallback(){

        const btn = this.shadowRoot.querySelector('button');
        const box = this.shadowRoot.querySelector('.main-box');
        selectsBTN.push(this);
        
        btn.addEventListener("click", ()=>{
            currentWorld.value = this.getAttribute("name");
            box.style.backgroundColor = "rgba(0, 128, 0, 0.43)";

            for(const item of selectsBTN){
                if(item !== this){
                    const box = item.shadowRoot.querySelector('.main-box');
                    box.style.backgroundColor = "black";
                }
            }
            
            const newAlert = new AlertBox("The planetary system is selected", "green");
            alertBox.append(newAlert);
        })



    }
}

export { WorldItem }