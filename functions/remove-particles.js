import { all_objects } from "../utils/global-variables.js"

function removeAllParticles(){
    let arr = [...all_objects]
            
    arr.forEach((objext)=>{
        if(objext){
            objext.logItem.remove()
            objext.remove()
        }
    })
}

export { removeAllParticles }