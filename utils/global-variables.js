const all_objects = [];
const G = 1;
const logBox = {logbox: null};
const softening = 2;
const play = {value: false};
const duration = { sec: 0, min: 0 };
const timeLine = {backward: [], forward: []};
const CDC = { value: 0.01 };
const isCameraActive = {object: false};
const timerIsOn = {value: false};
const zoomRange = {value: 1};
const currentWorld = {value: null};
const currentSun = {value: null};
const selectPanelIsActive = {value: false}
const selectsBTN = [];
const about = {aboutIsOn: false}
const mainSettings = {isON: false}
export { all_objects, about, G, mainSettings, selectsBTN, softening, logBox, play , duration, timeLine, CDC, isCameraActive, timerIsOn, zoomRange, currentWorld, currentSun, selectPanelIsActive};