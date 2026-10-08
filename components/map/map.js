"use strict";

import { scrollCenter } from "../../functions/ScrollCenter.js";
import { all_objects } from "../../utils/global-variables.js";

const mapObjectArray = []

class MapItem extends HTMLElement {
    constructor(){

        super()
        this.attachShadow({mode: "open"})

        this.shadowRoot.innerHTML =

            `
                <link rel="stylesheet" href="./components/map/map-style.css">
                <div class="window">
                    <div class="inner-window">

                        <div class="current-pos">
                            <div class="inner-pos">
                                <div class="hori"></div>
                                <div class="vertical"></div>
                            </div>
                        </div>
                    
                    </div>
                </div>

            `
    }

    connectedCallback() {

        this.cp = this.shadowRoot.querySelector(".current-pos");
        this.innerWindow = this.shadowRoot.querySelector(".inner-window");
        const totaalX = document.documentElement.scrollWidth - window.innerWidth;
        const totaalY = document.documentElement.scrollHeight - window.innerHeight;

        this.cpWidth = (window.innerWidth / totaalX) * 250;
        this.cpHeight = (window.innerHeight / totaalY) * 160;

        this.cp.style.width = this.cpWidth + "px";
        this.cp.style.height = this.cpHeight + "px";

        this.innerWindow.addEventListener("click", (event)=>{
            event.stopPropagation();
            if(event.target === this.innerWindow){
                this.cp.style.left = (event.layerX - this.cpWidth/2) + "px";
                this.cp.style.top = (event.layerY - this.cpHeight/2) + "px";
    
                const X = ((event.layerX) / 250) * totaalX;
    
                const y = ((event.layerY) / 160) * totaalY;
    
                scrollCenter(X, y)
            }
        })

        this.updateMap()
    }

    createDIV(){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "object");
        this.innerWindow.append(newDiv);
        return newDiv;
    }

    updateMap(){

        const totaalX = document.documentElement.scrollWidth - window.innerWidth;
        const totaalY = document.documentElement.scrollHeight - window.innerHeight;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

        this.cp.style.left = (scrollLeft / totaalX) * (250 - this.cpWidth) + "px";
        this.cp.style.top = (scrollTop / totaalY) * (160 - this.cpHeight) + "px";

        for(let item of all_objects){
            let isThere = mapObjectArray.find((inner)=>{
                return inner.real === item;
            })

            if(!isThere){
                const newDiv = this.createDIV()
                mapObjectArray.push({real: item, inMap: newDiv})
            }

        }

        mapObjectArray.forEach((item, index)=>{
            if(item.real){
                item.inMap.style.left = (item.real.X / document.documentElement.scrollWidth) * 250 + "px";
                item.inMap.style.top = (item.real.Y / document.documentElement.scrollHeight) * 160 + "px";

            }else{
                item.inMap.remove();
                mapObjectArray.splice(index, 1)
            }

        })


    }
    
}


customElements.define('map-item', MapItem);
export { MapItem, mapObjectArray };