import { all_objects } from "../../../utils/global-variables.js";

let current_object = null;
let duration = 0
let isMousDown = false;
let x_offset = 0;
let y_offset = 0;
let first_X = 0;
let first_Y = 0;
let interval = null;

function setEventForAllObject (){

    function debounce(){
        if(current_object){
            interval = setInterval(()=>{
                if (!current_object) {
                    return;
                }
                let rect = current_object.getBoundingClientRect()
                first_X = current_object.X;
                first_Y = current_object.Y;

            }, 500)
        }
    }

    for(let input of all_objects){

        input.addEventListener("mousedown", (event)=>{
            if(event.target === input){
                current_object = input;
                isMousDown = true;
                const rect = input.getBoundingClientRect()
                current_object.V_X = 0;
                current_object.V_Y = 0;
                first_X = current_object.X;
                first_Y = current_object.Y;
                duration = Date.now()
                x_offset = Math.floor(event.clientX - rect.left);
                y_offset = Math.floor(event.clientY - rect.top);
                debounce()

            }

        })

    }

}

document.addEventListener("mousemove", (event) => {
    if(isMousDown){
        
        current_object.X = event.clientX ;
        current_object.Y = event.clientY ;
        current_object.V_X = 0;
        current_object.V_Y = 0;
        current_object.style.transform = `translate(${ event.clientX - x_offset }px, ${ event.clientY - y_offset }px)`;
    }
})

document.addEventListener("mouseup", (event) => {

    if(!current_object){return;}

    let time = Date.now()

    let dt = Math.floor((time - duration) / 1000) + 10

    if(dt > 0){
        
        current_object.V_X = (current_object.X - first_X) / dt * 10;
        current_object.V_Y = (current_object.Y - first_Y) / dt * 10;
    }
    
    clearInterval(interval);
    isMousDown = false;
    current_object = null;
    x_offset = 0;
    y_offset = 0;

})

function movement () {

    setEventForAllObject()

}


export { movement }