import { timeLine } from "../utils/global-variables.js";



function addObjectToTimeLine (inputArray) {

    if(timeLine.backward.length !== 500 ){

        timeLine.backward.push(inputArray);

    }else{

        timeLine.backward = [];
        timeLine.backward.push(inputArray);

    }
    
}

export { addObjectToTimeLine }

