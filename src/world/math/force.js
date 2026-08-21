import { G, softening } from "../../../utils/global-variables.js";

function force (first, second, dist){

    let T_F = (G * first.mass * second.mass) / (dist * dist + softening * softening)
    let deltaX = second.X - first.X;
    let deltaY = second.Y - first.Y;

    let F_X = T_F * deltaX / dist;
    let F_Y = T_F * deltaY / dist;

    return [F_X, F_Y];
}

export { force };