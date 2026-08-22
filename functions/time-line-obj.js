

function createObjectTimeLine (object){

    const data = {
        mass: object.mass,
        x: object.X,
        y: object.Y,
        vx: object.V_X,
        vy: object.V_Y,
        obj: object,
    }

    return data;

}

export { createObjectTimeLine }