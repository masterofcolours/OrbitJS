import { all_objects, timeLine } from "../utils/global-variables.js"
import { setValue } from "./backward-timeline.js";


function forwardTimeLine(){
    const forwardBTN = document.querySelector(".forward");

    forwardBTN.addEventListener("click", ()=>{

        if(timeLine.forward.length < 1){
            return;
        }

        const lastData = timeLine.forward.pop();
        timeLine.backward.push(lastData);
        
        for(let item of all_objects){
            
            let isFind = lastData.findIndex((innerItem)=>{

                return innerItem.obj === item;

            })
            
            if( isFind !== -1 ){
                if(timeLine.backward.length > 0){
                    setValue(lastData[isFind], isFind);
                }

            }else{            
                item.remove()
            }

        }
        

    })

}

export { forwardTimeLine }