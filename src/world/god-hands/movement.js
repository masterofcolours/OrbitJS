import { current_object,
    duration_time,
    isMousDown,
    x_offset,
    y_offset,
    first_X,
    first_Y,
    interval, 
} from "../../class-objects/object.js";

document.addEventListener("mousemove", (event) => {
    if(isMousDown.state){
        current_object.target.X = event.clientX ;
        current_object.target.Y = event.clientY ;
        current_object.target.V_X = 0;
        current_object.target.V_Y = 0;
        current_object.target.style.transform = `translate(${ event.clientX - x_offset.val }px, ${ event.clientY - y_offset.val }px)`;
    }
})

document.addEventListener("mouseup", (event) => {

    if(!current_object.target){return;}

    current_object.target.orbit.style.opacity = 1;
    
    let time = Date.now()

    let dt = Math.floor((time - duration_time) / 1000) + 10

    if(dt > 0){
        
        current_object.target.V_X = (current_object.target.X - first_X.val) / dt * 10;
        current_object.target.V_Y = (current_object.target.Y - first_Y.val) / dt * 10;
    }
    
    clearInterval(interval);
    isMousDown.state = false;
    current_object.target = null;
    x_offset.val = 0;
    y_offset.val = 0;

})

function movement () {

    // setEventForAllObject()

}


export { movement}