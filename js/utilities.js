
// for button id
function tabButtonId(id) {
    const buttonsId = document.getElementById(id);
    return buttonsId;
}


// for inputValues
function inputValueId(id) {
    const inputValue = document.getElementById(id).value;
    const floatInputValue = parseFloat(inputValue);
    return floatInputValue;
}


// for id innerText 
function innerTextValueId(id) {
    const innerTextValue = document.getElementById(id).innerText;
    const floatInnerTextValue = parseFloat(innerTextValue);
    return floatInnerTextValue;
}