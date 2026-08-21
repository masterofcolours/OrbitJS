
function acceleration (target, force){

    let A_X = force[0] / target.mass * 2
    let A_Y = force[1] / target.mass * 2

    return [A_X, A_Y]
}

export { acceleration };