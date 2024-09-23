
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


// for hide div
function clickAddSectionId(id) {
    document.getElementById('acc-content1').classList.add('hidden');
    document.getElementById('acc-content2').classList.add('hidden');
    document.getElementById('acc-content3').classList.add('hidden');
    document.getElementById('acc-content4').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}

// for icon
function clickAddIconId(id) {
    document.getElementById('angle-down1').classList.remove('rotate-180');
    document.getElementById('angle-down2').classList.remove('rotate-180');
    document.getElementById('angle-down3').classList.remove('rotate-180');
    document.getElementById('angle-down4').classList.remove('rotate-180');

    document.getElementById(id).classList.add('rotate-180');
}