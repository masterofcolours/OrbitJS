"use strict";

class ArrowKeys extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

            `
                <link rel="stylesheet" href="./components/arrow-keys/arrow-keys.css">
                <div class="arrow-key-box">

                    <div class="arrow-item top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 10L32 26C32.8 27.1 32 28.5 30.6 28.5H9.4C8 28.5 7.2 27.1 8 26L20 10Z" fill="#FFFFFF"/>
                        </svg>
                    </div>

                    <div class="arrow-item mid left" style="justify-content: flex-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 20L26 8C27.1 7.2 28.5 8 28.5 9.4V30.6C28.5 32 27.1 32.8 26 32L10 20Z" fill="#FFFFFF"/>
                    </svg>
                    
                    </div>
                    
                    <div class="arrow-item mid right" style="justify-content: flex-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M30 20L14 32C12.9 32.8 11.5 32 11.5 30.6V9.4C11.5 8 12.9 7.2 14 8L30 20Z" fill="#FFFFFF"/>
                        </svg>
                    </div>

                    <div class="arrow-item bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 30L8 14C7.2 12.9 8 11.5 9.4 11.5H30.6C32 11.5 32.8 12.9 32 14L20 30Z" fill="#FFFFFF"/>
                        </svg>
                    </div>

                </div>

            `
    }

    connectedCallback() {
       const top = this.shadowRoot.querySelector(".top");
       const left = this.shadowRoot.querySelector(".left");
       const right = this.shadowRoot.querySelector(".right");
       const bottom = this.shadowRoot.querySelector(".bottom");

       top.addEventListener("click", ()=>{
           moveScrooll('top')
        
       })
       left.addEventListener("click", ()=>{
           moveScrooll('left')
       })
       right.addEventListener("click", ()=>{
           moveScrooll('right')
        
       })
       bottom.addEventListener("click", ()=>{
            moveScrooll('bottom')
       })
       
       function moveScrooll(type){
           let value = null;
       
           switch (type) {
               case "top":
                   value = -100;
                   break;
                   
               case "bottom":
               value = 100;
                   
                   break;
               case "right":
               value = 100;
                   
                   break;
               case "left":
               value = -100;
                       
                   break;
               default:
                   break;
           }           
       
           if(type === "top" || type === "bottom"){
               const scrollTop = window.scrollY + value;
                window.scrollTo({
                   top: scrollTop,
                   behavior: "smooth" 
               })
           }
           if(type === "right" || type === "left"){
               const scrollLeft = window.scrollX + value;
               window.scrollTo({
                   left: scrollLeft,
                   behavior: "smooth" 
               })
           }
       }
    }


}


export { ArrowKeys };