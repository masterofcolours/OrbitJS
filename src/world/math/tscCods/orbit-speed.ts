
import type { MyPhysicsElement } from "./types.js";
import { distance } from "../distance.js";
import { G } from "../../../../utils/global-variables.js";


function setOrbitalSpeed(topObject:MyPhysicsElement, input:MyPhysicsElement): number[]{

    const dist:any = distance(topObject, input);

    const v:number = Math.sqrt((G * topObject.mass)/ dist[0]);

    const deltaX:number = input.X - topObject.X;
    const deltaY:number = input.Y - topObject.Y;

    const vx:number = -v * (deltaY / dist[0]);
    const vy:number = v * (deltaX / dist[0]); 

    return [vx, vy];
}

export { setOrbitalSpeed }
