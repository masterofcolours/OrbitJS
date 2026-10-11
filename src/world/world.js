import { all_objects, isCameraActive, play } from "../../utils/global-variables.js";
import { distance } from "./math/distance.js";
import { createObjectTimeLine } from "../../functions/time-line-obj.js";
import { addObjectToTimeLine } from "../../functions/time-line-add.js";
import { camera } from "./camera/camera.js";
import { acceleration } from "./math/jsCods/acceleration.js";
import { force } from "./math/jsCods/force.js";
import { createMap } from "../../functions/create-map.js";
let timeStored = 0;
const numberOfParticles = document.querySelector('.number-of-particles');

function world(){

    const updateMap = createMap();

    function loop(time) {

        if(play.value){

            let delta_T = (time - timeStored) / 1000;
            if (timeStored === 0) {
                timeStored = time;
            }

            updateMap.updateMap()
            
            if (delta_T > 0.1) delta_T = 0.016;
            
            const toRemove = new Set();
            
            const dataArrayInTimeLine = []
            
            for(let item of all_objects){
                let result = createObjectTimeLine(item)
                dataArrayInTimeLine.push(result);
            }
            
            addObjectToTimeLine(dataArrayInTimeLine)


            for(let obj of all_objects){
                
                let total_X_acceleration = 0;
                let total_Y_acceleration = 0;

                for(let obj_inner of all_objects){
                    
                    if( obj_inner !== obj ){
                        let dist = distance(obj, obj_inner);
                        
                        let a;
                        
                        if(dist[2]){                        
                            a = dist[1]
                            toRemove.add(obj_inner);
                        }else{
                            
                            let f = force(obj, obj_iiner, dist[0]);
                            a = acceleration(obj, f);
                            
                        }
    
                        total_X_acceleration += a[0];
                        total_Y_acceleration += a[1];
                    }
                    
                }
                obj.totalAcceleration = [total_X_acceleration , total_Y_acceleration];
                
            }
            
            for(let item of toRemove){
                item.remove()
            }
            
    
            for(let item of all_objects){
                item.update(item.totalAcceleration, delta_T)
            }
            
        }

        camera(isCameraActive.object)
        numberOfParticles.textContent = "Objects: " + all_objects.length
        
        requestAnimationFrame(loop);
    }
    
    requestAnimationFrame(loop);

}

export { world }