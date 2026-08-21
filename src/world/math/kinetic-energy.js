function kinetic(object, vx, vy){
    
    return 0.5 * object.mass * ((vx*vx) + (vy*vy))

} 

export { kinetic };