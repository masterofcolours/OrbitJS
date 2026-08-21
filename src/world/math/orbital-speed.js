import { distance } from "./distance.js";
import { G } from "../../../utils/global-variables.js";

function setOrbitalSpeed(topObject, input){

    let dist = distance(topObject, input);

    let v = Math.sqrt((G * topObject.mass)/ dist[0]);

    let deltaX = input.X - topObject.X;
    let deltaY = input.Y - topObject.Y;

    const vx = -v * (deltaY / dist[0]);
    const vy = v * (deltaX / dist[0]); 

    return [vx, vy];
}

export { setOrbitalSpeed }
