import { timeLine } from "../utils/global-variables.js";



function addObjectToTimLine (inputArray) {

    if(timeLine.backward.length !== 500 ){

        timeLine.backward.push(inputArray);

    }else{

        timeLine.backward = [];
        timeLine.backward.push(inputArray);

    }
    
}

export { addObjectToTimLine }

