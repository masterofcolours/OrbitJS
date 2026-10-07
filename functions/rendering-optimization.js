import { pureDistance } from "./pure-distance.js";

function renderingOptimization(particle, data, cx, cy){

    const left = window.scrollX;
    const top = window.scrollY;
    const right = window.innerWidth + left;
    const bottom = window.innerHeight + top;

    const centerX = window.scrollX + window.innerWidth /2
    const centerY = window.scrollY + window.innerHeight /2

    let particleHide = false;
    let orbitHide1 = false;
    let numberPoints = 0;


    if(
        particle.X + particle.width < left ||
        particle.X > right ||
        particle.Y + particle.height  < top ||
        particle.Y > bottom
    ){
        particleHide = true;
    }

    for(let theta = 0; theta <= 359; theta++){
        
            const x = cx + (data.a * Math.cos(theta) * Math.cos(data.rotation)) - (data.b * Math.sin(theta) * Math.sin(data.rotation));
            const y = cy + (data.a * Math.cos(theta) * Math.sin(data.rotation)) + (data.b * Math.sin(theta) * Math.cos(data.rotation));
    
            if((x >= left && x <= right) && (y >= top && y <= bottom)){
                
            }else{
                numberPoints++;
            }
        

    }

    if(numberPoints >= 180){
        orbitHide1 = true;
    }

    return {divHide: particleHide, orbitHide: orbitHide1}
}

export { renderingOptimization }