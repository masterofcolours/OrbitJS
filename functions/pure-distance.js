function pureDistance(ax, ay, bx, by){
    
    let result = Math.sqrt(((bx) - (ax))**2 + 
    ((by) - (ay))**2);
    
    return result

}

export { pureDistance }