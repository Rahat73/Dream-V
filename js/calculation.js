function getValueFromInputField(elementID) {
    return parseFloat(document.getElementById(elementID).value);
}

function setValue(elementID, value) {
    document.getElementById(elementID).innerText = value;
}

function playerCost() {
    const playerCount = document.querySelector('ol').childElementCount;
    const perPlayerCost = getValueFromInputField('perPlayerInput');
    const totalPlayerCost = playerCount * perPlayerCost;

    setValue('playerCost', totalPlayerCost);
}

function calculateTotalCost() {
    const playerCost = parseFloat(document.getElementById('playerCost').innerText);
    const managerCost = getValueFromInputField('managerCostInput');
    const coachCost = getValueFromInputField('coachCostInput');

    const totalCost = playerCost + managerCost + coachCost;
    setValue('totalCost', totalCost);
}