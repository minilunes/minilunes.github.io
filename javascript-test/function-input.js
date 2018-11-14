window.onload = () => {
    
const feetToInchesAction =  document.getElementById('feet-to-inches-action');
const milesToFeetActionAction =  document.getElementById('miles-to-feet-action');
const areaOfTriangleAction =  document.getElementById('area-of-triangle-action');
const areaOfCircleAction =  document.getElementById('area-of-circle-action');    

feetToInchesAction.onclick = () => {
    const feetToInchesInput = document.getElementById('feet-to-inches-input');
    const feetToInchesDisplay = document.getElementById('feet-to-inches-display');
    
        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
}   
milesToFeetAction.onclick = () => {    
    const milesToFeetInput = document.getElementById('miles-to-feet-input');
    const milesToFeetDisplay = document.getElementById('miles-to-feet-display');
    
        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
}   
areaOfTriangleAction.onclick = () => {
    const areaOfTriangleInput = document.getElementById('area-of-triangle-input');
    const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display');
    
        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput.value);
}
areaOfCircleAction.onclick = () => {
    const  areaOfCircleInput = document.getElementById('area-of-circle-input');
    const  areaOfCircleDisplay = document.getElementById('area-of-circle-display');    
    
        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
}
 
const feetToInches = (feet) => {
    return feet * numberOfInchesInAFoot;
};
const milesToFeet = (miles) => {
    return miles * numberOfFeetInAMile;
};
const areaOfTriangle = (base, height) => {
    return area = (base * height) / two;
};
const areaOfCircle = (radius) => {
    return Math.PI * radius^2;
}