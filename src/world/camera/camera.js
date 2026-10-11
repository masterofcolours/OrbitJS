import { isCameraActive } from "../../../utils/global-variables.js";


function camera (){
    if(isCameraActive.object){
        isCameraActive.object.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }
}

export { camera }