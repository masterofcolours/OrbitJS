import { all_objects, softening } from "../../../utils/global-variables.js";
import { collision } from "../physics/collision.js";
import { world } from "../world.js";
import { acceleration } from "./acceleration.js";

function distance (first , second ){

    let iscollision =  false;
    
    let result = Math.sqrt((second.X - first.X)**2 + (second.Y - first.Y)**2);
    
    let extrAacceleration = [0, 0];
    
    if(result <= 40){
        
        if(first.mass >= second.mass){
            collision(second.X, second.Y)
            
            let dt = 0.016;

            let fx = (second.mass * second.V_X) / dt;
            let fy = (second.mass * second.V_Y) / dt;

            first.mass += second.mass;

            extrAacceleration = acceleration(first, [fx, fy]);

            iscollision = true;
                    
        }
    }

    
    return  [result, extrAacceleration, iscollision];
}

export {distance};