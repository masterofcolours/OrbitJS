"use strict";
import { isCamerAactive } from "../../utils/global-variables.js";

class LogItem extends HTMLElement {
    constructor(mass, x, y, ax, ay, vx, vy, u, k,particle){
        super()
        this.hide = true;
        this.mass = mass;
        this.x = x;
        this.y = y;
        this.ax = ax;
        this.ay = ay;
        this.vx = vx;
        this.vy = vy;
        this.k = k;
        this.u = u;
        this.particle = particle;
        this.attachShadow({mode: "open"})


        this.shadowRoot.innerHTML =

            `       <link rel="stylesheet" href="./components/log-item/log-item-style.css">
                    
                    <div class="box">

                        <div class="close" title="Delete this Particle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>

                        <div class="camera">
                            <svg width="18px" height="18px" viewBox="0 -2 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>camera</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-256.000000, -465.000000)" fill="#ffffff"> <path d="M272,487 C268.687,487 266,484.313 266,481 C266,477.687 268.687,475 272,475 C275.313,475 278,477.687 278,481 C278,484.313 275.313,487 272,487 L272,487 Z M272,473 C267.582,473 264,476.582 264,481 C264,485.418 267.582,489 272,489 C276.418,489 280,485.418 280,481 C280,476.582 276.418,473 272,473 L272,473 Z M286,489 C286,490.104 285.104,491 284,491 L260,491 C258.896,491 258,490.104 258,489 L258,473 C258,471.896 258.896,471 260,471 L264,471 L265,469 C265.707,467.837 265.896,467 267,467 L277,467 C278.104,467 278.293,467.837 279,469 L280,471 L284,471 C285.104,471 286,471.896 286,473 L286,489 L286,489 Z M284,469 L281,469 L280,467 C279.411,465.837 279.104,465 278,465 L266,465 C264.896,465 264.53,465.954 264,467 L263,469 L260,469 C257.791,469 256,470.791 256,473 L256,489 C256,491.209 257.791,493 260,493 L284,493 C286.209,493 288,491.209 288,489 L288,473 C288,470.791 286.209,469 284,469 L284,469 Z" id="camera" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </div>

                        <div class="color-platte">
                            <svg fill="#fafafa" width="18px" height="18px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" stroke="#fafafa"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>color_palette_solid</title> <g id="b894e32b-0437-45ab-b8bf-9f0c4e8f57cd" data-name="Layer 3"> <path d="M32.23,14.89c-2.1-.56-4.93,1.8-6.34.3-1.71-1.82,2.27-5.53,1.86-8.92-.33-2.78-3.51-4.08-6.66-4.1A18.5,18.5,0,0,0,7.74,7.59c-6.64,6.59-8.07,16-1.37,22.48,6.21,6,16.61,4.23,22.67-1.4a17.73,17.73,0,0,0,4.22-6.54C34.34,19.23,34.44,15.49,32.23,14.89ZM9.4,10.57a2.23,2.23,0,0,1,2.87,1.21,2.22,2.22,0,0,1-1.81,2.53A2.22,2.22,0,0,1,7.59,13.1,2.23,2.23,0,0,1,9.4,10.57ZM5.07,20.82a2.22,2.22,0,0,1,1.82-2.53A2.22,2.22,0,0,1,9.75,19.5,2.23,2.23,0,0,1,7.94,22,2.24,2.24,0,0,1,5.07,20.82Zm7,8.33a2.22,2.22,0,0,1-2.87-1.21A2.23,2.23,0,0,1,11,25.41a2.23,2.23,0,0,1,2.87,1.21A2.22,2.22,0,0,1,12,29.15ZM15,8.26a2.23,2.23,0,0,1,1.81-2.53,2.24,2.24,0,0,1,2.87,1.21,2.22,2.22,0,0,1-1.82,2.53A2.21,2.21,0,0,1,15,8.26Zm5.82,22.19a2.22,2.22,0,0,1-2.87-1.21,2.23,2.23,0,0,1,1.81-2.53,2.24,2.24,0,0,1,2.87,1.21A2.22,2.22,0,0,1,20.78,30.45Zm5-10.46a3.2,3.2,0,0,1-1.69,1.76,3.53,3.53,0,0,1-1.4.3,2.78,2.78,0,0,1-2.56-1.5,2.49,2.49,0,0,1-.07-2,3.2,3.2,0,0,1,1.69-1.76,3,3,0,0,1,4,1.2A2.54,2.54,0,0,1,25.79,20Z"></path> </g> </g></svg>

                            <div class="platte-section">
                                <div class="platte-section-inner">
                                    <div data-color="green" style="background-color: green;"></div>
                                    <div data-color="yellow" style="background-color: yellow;"></div>
                                    <div data-color="blue" style="background-color: blue;"></div>
                                    <div data-color="aqua" style="background-color: aqua;"></div>
                                    <div data-color="purple" style="background-color: purple;"></div>
                                    <div data-color="cadetblue" style="background-color: cadetblue;"></div>
                                    <div data-color="slategrey" style="background-color: slategrey;"></div>
                                    <div data-color="darkblue" style="background-color: darkblue;"></div>
                                    <div data-color="coral" style="background-color: coral;"></div>
                                    <div data-color="brown" style="background-color: brown;"></div>
                                </div>
                            </div>

                        </div>

                        <div class="object-shape">
                            <div class="orbit-data"  style="color: white; margin-top: -35px;"> Orbit: true </div>
                            <div class="mass">1</div>
                        </div>

                        <div class="date">

                            <div class="top">
                                <span class="mass-number" > m= ${this.mass}</span>
                                <span class="xpos"> x= ${this.x}</span>
                                <span class="ypos"> y= ${this.y}</span>
                                <span class="acceleration-x"> vx= ${this.vx}</span>
                                <span class="acceleration-y"> vy= ${this.vy}</span>
                                <span class="speed-x" > ax= ${this.ax}</span>
                                <span class="speed-y" > ay= ${this.ay}</span>
                                <span class="k" > ay= ${this.k}</span>
                                <span class="u" > ay= ${this.u}</span>
                            </div>

                        </div>

                    </div>
                

            `
    }

    connectedCallback() {

        this.massSpan = this.shadowRoot.querySelector(".mass-number");
        this.massX = this.shadowRoot.querySelector(".xpos");
        this.massY = this.shadowRoot.querySelector(".ypos");
        this.massAx = this.shadowRoot.querySelector(".acceleration-x");
        this.massAy = this.shadowRoot.querySelector(".acceleration-y");
        this.massVx = this.shadowRoot.querySelector(".speed-x");
        this.massVy = this.shadowRoot.querySelector(".speed-y");
        this.massK = this.shadowRoot.querySelector(".k");
        this.massU = this.shadowRoot.querySelector(".u");
        this.orbitData = this.shadowRoot.querySelector(".orbit-data");


        const closeBtn = this.shadowRoot.querySelector(".close");
        const cameraBTN = this.shadowRoot.querySelector(".camera");
        const platteBTN = this.shadowRoot.querySelector(".platte-section-inner");


        closeBtn.addEventListener("click", ()=>{
            this.remove();
        })

        cameraBTN.addEventListener("click", ()=>{
            isCamerAactive.object = this.particle;
            const cameraBTN = document.querySelector('.camera-off');
            cameraBTN.style.display = "block";
        })

        for(let item of [...platteBTN.children]){
            item.addEventListener("click", ()=>{
                this.particle.divMass.style.backgroundColor = item.dataset.color;
            })
        }
        
    }
    
    disconnectedCallback() { 
        if(this.particle){
            this.particle.remove();
        }
    }

    update_UI(mass, x, y, vx, vy, ax, ay, U, k, notInOrbit){

        this.massSpan.textContent = "m= " + mass + " kg";
        this.massX.textContent = "x= " + Math.floor(x);
        this.massY.textContent = "y= " + Math.floor(y);
        this.massAx.textContent = "Ax= " + Math.floor(ax) + "  m/s^2";
        this.massAy.textContent = "Ay= " + Math.floor(ay) + "  m/s^2";
        this.massVx.textContent = "Vx= " + Math.floor(vx) + "  m/s";
        this.massVy.textContent = "Vy= " + Math.floor(vy) + "  m/s";
        this.massK.textContent = "Kinetic Energy= " + Math.floor(k)
        this.massU.textContent = "Potential Energy= " + Math.floor(U)
        if(!notInOrbit){
           this.orbitData.textContent = "Orbit: true";
        }else{
            this.orbitData.textContent = "Orbit: false";
        }
    }

}



export { LogItem };