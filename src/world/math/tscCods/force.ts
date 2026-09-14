import { G, softening } from "../../../../utils/global-variables.js";
import type { MyPhysicsElement } from './types';

function force(first:MyPhysicsElement, second:MyPhysicsElement, dist:number): number[]{

    const tottalForce:number = (G * first.mass * second.mass) / (dist * dist + softening * softening);
    const deltaX:number = second.X - first.X;
    const deltaY:number = second.Y - first.Y;
    const F_X:number = tottalForce * deltaX / dist;
    const F_Y:number = tottalForce * deltaY / dist;

    return [F_X, F_Y]
}

export { force }