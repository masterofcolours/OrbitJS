import { all_objects, G } from "../../../utils/global-variables.js";
import { distance } from "./distance.js";

function potential_energy(input){
    let U = 0;

    for(let object of all_objects){
        if(input !== object){  
            let distanceREsult = distance(input, object)       
            U += (-G* input.mass * object.mass) / distanceREsult[0];
            
        }
    }

    
    

    return U;

}

export { potential_energy }