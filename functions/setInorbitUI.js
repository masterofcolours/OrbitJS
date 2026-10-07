import { setOrbitalSpeed } from "../src/world/math/jsCods/orbit-speed.js";
import { currentSun, all_objects } from "../utils/global-variables.js";


function setInorbitUI(){
    for(let obj of all_objects){
        if(obj !== currentSun.value){
            const res = setOrbitalSpeed(currentSun.value, obj);
            obj.V_X = res[0];
            obj.V_Y = res[1];
        }
    }
}

export { setInorbitUI };