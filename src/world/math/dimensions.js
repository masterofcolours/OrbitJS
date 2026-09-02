import { CDC } from "../../../utils/global-variables.js"

function dimensions (particle){

    if(!particle) return;

    let width = null;
    let height = null;
    

    width = particle.mass * CDC.value;
    height = particle.mass * CDC.value;

    if(width < 20){

        width = 40;
        height = 40;

    }
    
    if(width > 300){

        width = 200;
        height = 200;

    }
    


    return {widthValue: width, heightValue: height}

}

export { dimensions }