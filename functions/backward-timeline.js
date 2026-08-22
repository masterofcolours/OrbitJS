import { play, timeLine, all_objects } from "../utils/global-variables.js";

function backward (){

    const backwardBTN = document.querySelector(".backward");

    backwardBTN.addEventListener("click", ()=>{
        play.value = false;

        if(timeLine.backward.length < 1){
            return;
        }

        const lastData = timeLine.backward.pop();
        timeLine.forward.push(lastData);
        
        for(let item of lastData){
            
            let isFind = all_objects.findIndex((innerItem, index)=>{
                
                return innerItem === item.obj
                    
            })
            
            if( isFind !== -1 ){
                if(timeLine.backward.length > 0){
                    setValue(item, isFind)
                }

            }else{
                document.body.append(item.obj);
                break;
            }

        }
        

    })




}



function setValue(data, index){
    
    const target =  all_objects[index];
       
    target.mass = data.mass;
    target.X = data.x;
    target.Y = data.y;
    target.V_X = data.vx;
    target.V_Y = data.vy;

    target.style.transform = `translate(${data.x - 20 }px, ${data.y - 20}px)`;

    target.updateOrbit()

}

export { backward, setValue }