import { G, softening } from "../../../../utils/global-variables.js";
function force(first, second, dist) {
    const tottalForce = (G * first.mass * second.mass) / (dist * dist + softening * softening);
    const deltaX = second.X - first.X;
    const deltaY = second.Y - first.Y;
    const F_X = tottalForce * deltaX / dist;
    const F_Y = tottalForce * deltaY / dist;
    return [F_X, F_Y];
}
export { force };
//# sourceMappingURL=force.js.map