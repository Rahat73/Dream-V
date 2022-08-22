function getValueFromInputField(elementID) {
    return parseFloat(document.getElementById(elementID).value);
}

function setValue(elementID, value) {
    document.getElementById(elementID).innerText = value;
}

function playerCost() {
    const playerCount = document.querySelector('ol').childElementCount;
    const perPlayerCost = getValueFromInputField('perPlayerInput');

    if (!isNaN(perPlayerCost) && perPlayerCost >= 0) {
        const totalPlayerCost = playerCount * perPlayerCost;
        setValue('playerCost', totalPlayerCost);
    }
    else {
        alert("Please input positive numerical value...!");
    }
}

function calculateTotalCost() {
    const playerCost = parseFloat(document.getElementById('playerCost').innerText);
    const managerCost = getValueFromInputField('managerCostInput');
    const coachCost = getValueFromInputField('coachCostInput');

    if (!isNaN(managerCost) && !isNaN(coachCost) && managerCost > 0 && coachCost >= 0) {
        const totalCost = playerCost + managerCost + coachCost;
        setValue('totalCost', totalCost);
    }
    else {
        alert("Please input positive numerical value...!");
    }
}