function getValueFromInputField(elementID) {
    return parseFloat(document.getElementById(elementID).value);
}

function setValue(elementID, value) {
    document.getElementById(elementID).innerText = value;
}

function calculateTotalCost() {
    const playerCost = parseFloat(document.getElementById('playerCost').innerText);
    const managerCost = getValueFromInputField('managerCostInput');
    const coachCost = getValueFromInputField('coachCostInput');

    const totalCost = playerCost + managerCost + coachCost;
    setValue('totalCost', totalCost);
}