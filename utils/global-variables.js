const all_objects = [];
const G = 1;
const logBox = {logbox: null};
const softening = 2;
const play = {value: false};
const duration = { sec: 0, min: 0 };
const timeLine = {backward: [], forward: []};
const CDC = { value: 0.01 };
const isCamerAactive = {object: false};
const timerIsOn = {value: false};
const zoomRange = {value: 1};
const currentWorld = {value: null};
const currentSun = {value: null};
const selectPanelIsActive = {value: false}
const selectsBTN = []
export { all_objects, G, selectsBTN, softening, logBox, play , duration, timeLine, CDC, isCamerAactive, timerIsOn, zoomRange, currentWorld, currentSun, selectPanelIsActive};