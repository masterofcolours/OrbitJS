import { all_objects, zoomRange } from "../../../utils/global-variables.js";

function zoom(type){
    for(const item of all_objects){
        
        if(item.divMass && item.orbit){
            item.divMass.style.zoom = `${zoomRange.value}`;
            item.orbit.style.zoom = zoomRange.value;

            if(type === "zoom-in"){
                item.X += -((item.width - (item.width * zoomRange.value)) /2)
                item.Y += -((item.width - (item.width * zoomRange.value)) /2)
                item.width = item.width * zoomRange.value;
                item.height = item.height * zoomRange.value;
            }
            
            if(type === "zoom-up"){
                item.X += ((item.width- (item.width * zoomRange.value)) /2)
                item.Y += (( item.width- (item.width * zoomRange.value)) /2)
                item.width = item.width * zoomRange.value;
                item.height = item.height * zoomRange.value;
            }

        }
    }
}

export { zoom };