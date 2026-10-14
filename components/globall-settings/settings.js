import { mainSettings } from "../../utils/global-variables.js";

class settingMian extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode: "open"});

        this.shadowRoot.innerHTML= 
        `
            <link rel="stylesheet" href="./components/globall-settings/settings-style.css">

            <div class="main">
                <div class="inner">


                <div class="close">
                        <div class="close-inner">
                            <svg class="close-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

        `

        
    }

    connectedCallback(){
        mainSettings.isON = true;
        const closeBTN = this.shadowRoot.querySelector(".close");
        closeBTN.addEventListener("click", (event)=>{
            if(closeBTN.contains(event.target)){
                this.remove()
            }
        })
    }
    
    disconnectedCallback(){
        mainSettings.isON = false;
    }

    

}


export { settingMian }