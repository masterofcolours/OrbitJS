function acceleration(target, force) {
    const A_X = force[0] / target.mass * 2;
    const A_Y = force[1] / target.mass * 2;
    return [A_X, A_Y];
}
export { acceleration };
//# sourceMappingURL=acceleration.js.map