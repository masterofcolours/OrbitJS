import { all_objects, play } from "../../utils/global-variables.js";
import { distance } from "./math/distance.js";
import { force } from "./math/force.js";
import { acceleration } from "./math/acceleration.js";
let timeStored = 0
function world(){

    function loop(time) {

        if(play.value){

            let delta_T = (time - timeStored) / 1;
            timeStored = time; 
            
            if (delta_T > 0.1) delta_T = 0.016;
    
            const toRemove = new Set();
            
            for(let obj of all_objects){
    
                let total_X_acceleration = 0;
                let total_Y_acceleration = 0;
    
                for(let obj_iiner of all_objects){
    
                    if( obj_iiner !== obj ){
                        let dist = distance(obj, obj_iiner);
    
                        let a;
    
                        if(dist[2]){                        
                            a = dist[1]
                            toRemove.add(obj_iiner);
                        }else{
                            
                            let f = force(obj, obj_iiner, dist[0]);
                            a = acceleration(obj, f);
    
                        }
    
                        total_X_acceleration += a[0];
                        total_Y_acceleration += a[1];
                    }
                    
                }
                
                obj.totalAccelertion = [total_X_acceleration , total_Y_acceleration];
    
            }
    
            for(let item of toRemove){
                item.remove()
            }
            
    
            for(let item of all_objects){
                item.update(item.totalAccelertion, delta_T)
            }
            
        }
        
        
        requestAnimationFrame(loop);
    }
    
    requestAnimationFrame(loop);

}

export { world }