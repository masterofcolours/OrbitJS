import { all_objects } from "../../../utils/global-variables.js"

function collision (x, y){

    let text = document.createElement("p");
    text.setAttribute("class", "boom")
    text.textContent = "BOOM!!";
    text.style.left = x - 20 + "px";
    text.style.top = y - 20 + "px";

    
    document.body.append(text);

    setTimeout(()=>{
        text.remove();
    },300)
    
}


export {collision}