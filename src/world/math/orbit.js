import { G } from "../../../utils/global-variables.js";
const SCALE = 1;
function orbit (planet, central){

    const μ = G * central.mass;

    const rx = planet.X - central.X;
    const ry = planet.Y - central.Y;
    const r = Math.sqrt(rx * rx + ry * ry);

    const vx = planet.V_X - central.V_X;
    const vy = planet.V_Y - central.V_Y;
    const v2 = vx * vx + vy * vy;

    const invA = (2 / r) - (v2 / μ);
    if (invA <= 0) { 
        planet.orbit.style.display ="none"; 
        planet.notInOrbit = true;
        return null;
    };
    
    planet.notInOrbit = false;
    const a = 1 / invA;

    const h = rx * vy - ry * vx;

    const e2 = 1 - (h * h) / (a * μ);
    const e = Math.sqrt(Math.max(0, e2));

    const b = a * Math.sqrt(Math.max(0, 1 - e * e));
    const c = a * e;

    const ex = ((v2 - μ / r) * rx - (rx * vx + ry * vy) * vx) / μ;
    const ey = ((v2 - μ / r) * ry - (rx * vx + ry * vy) * vy) / μ;
    const rotation = Math.atan2(ey, ex);

    return { 
        a: a * SCALE, 
        b: b * SCALE, 
        c: c * SCALE, 
        e, 
        rotation 
    };

} 

export { orbit, SCALE };