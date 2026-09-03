import { isCamerAactive } from "../../../utils/global-variables.js";


function camera (){
    if(isCamerAactive.object){
        isCamerAactive.object.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }
}

export { camera }