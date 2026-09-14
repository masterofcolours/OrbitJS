import { distance } from "../distance.js";
import { G } from "../../../../utils/global-variables.js";
function setOrbitalSpeed(topObject, input) {
    const dist = distance(topObject, input);
    const v = Math.sqrt((G * topObject.mass) / dist[0]);
    const deltaX = input.X - topObject.X;
    const deltaY = input.Y - topObject.Y;
    const vx = -v * (deltaY / dist[0]);
    const vy = v * (deltaX / dist[0]);
    return [vx, vy];
}
export { setOrbitalSpeed };
//# sourceMappingURL=orbit-speed.js.map