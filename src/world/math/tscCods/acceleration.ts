import type { MyPhysicsElement } from './types';

function acceleration(target: MyPhysicsElement, force: number[]): number[] {

    const A_X: number = force[0]! / target.mass * 2;
    const A_Y: number = force[1]! / target.mass * 2;

    return [A_X, A_Y]

}

export { acceleration }