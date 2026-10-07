function scrollCenter (midX, midY){
    window.scrollTo({
        top: midY,
        left: midX,
        behavior: "smooth" 
    })
}

export { scrollCenter }