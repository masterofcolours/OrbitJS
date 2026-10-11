import { MapItem } from "../components/map/map.js"

function createMap (){
    const newMap = new MapItem();
    document.body.append(newMap);
    return newMap;

}

export { createMap }