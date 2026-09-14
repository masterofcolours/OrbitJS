import type { MyPhysicsElement } from './types';

function kinetic(object: MyPhysicsElement, vx:number, vy:number) : number{

    const kineticRsult:number = 0.5 * object.mass * ((vx*vx) + (vy*vy));
    return kineticRsult;

}

export { kinetic }