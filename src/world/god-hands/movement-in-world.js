function leftClickOnWorld (){

    let isClicked = false;
    let firstX = 0;
    let firstY = 0;

    document.addEventListener("mousedown", (event)=>{
        if(event.target === document.body){
            isClicked = true;
            firstX = event.clientX;
            firstY = event.clientY;
            
        }
    })
    
    document.addEventListener("mousemove", (event)=>{
        if(isClicked){
            const newX = (event.clientX - firstX) * -0.04;
            const newY = (event.clientY - firstY) * -0.04;

            const currentScrollX = (window.scrollX + newX);
            const currentScrollY = (window.scrollY + newY);

            if(event.clientX < firstX && event.clientY > firstY){
                document.body.style.cursor = 'url("./pics/top-right.png") 0 0, auto'
            }
            
            if(event.clientX > firstX && event.clientY > firstY){
                document.body.style.cursor = 'url("./pics/top-left.png") 0 0, auto';
            }

            if(event.clientX > firstX && event.clientY < firstY){
                document.body.style.cursor = 'url("./pics/bottom-left.png") 0 0, auto';
            }
            
            if(event.clientX < firstX && event.clientY < firstY){
                document.body.style.cursor = 'url("./pics/bottom-right.png") 0 0, auto';
            }

            if(Math.abs(event.clientX - firstX) < 30 && event.clientY < firstY){
                document.body.style.cursor = 'url("./pics/bottom.png") 0 0, auto';
            }
            
            if(Math.abs(event.clientX - firstX) < 30 && event.clientY > firstY){
                document.body.style.cursor = 'url("./pics/top.png") 0 0, auto';
            }
            
            if(Math.abs(event.clientY - firstY) < 30 && event.clientX > firstX){
                document.body.style.cursor = 'url("./pics/left.png") 0 0, auto';
            }
            
            if(Math.abs(event.clientY - firstY) < 30 && event.clientX < firstX){
                document.body.style.cursor = 'url("./pics/right.png") 0 0, auto';
            }

            window.scrollTo({
                top: currentScrollY,
                left: currentScrollX,
                behavior: "smooth" 
            })
        }
    })

    document.addEventListener("mouseup", ()=>{
        isClicked = false;
        document.body.style.cursor = 'default';
    })

}

export { leftClickOnWorld }