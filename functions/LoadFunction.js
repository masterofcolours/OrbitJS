import { SelectWorld } from "../components/select-world-panel/select-world.js";
import { selectPanelIsActive } from "../utils/global-variables.js";
import { removeAllParticles } from "./remove-particles.js";
import { scrollCenter } from "./ScrollCenter.js";
function loadFunctios() {
    if(!selectPanelIsActive.value){
        document.querySelector(".current-world").textContent = "Empty";
        removeAllParticles()
        const newPanel = new SelectWorld();
        document.body.append(newPanel);
        selectPanelIsActive.value = true;
    }else{
        const middleX = (document.documentElement.scrollWidth - window.innerWidth) / 2;
        const middleY = (document.documentElement.scrollHeight - window.innerHeight) / 2;
        scrollCenter(middleX, middleY);
    }
}

export { loadFunctios }