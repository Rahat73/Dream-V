function addSelectedPlayer(elementID, playerName) {
    const newChild = document.createElement('li');
    newChild.innerText = playerName;
    document.getElementById('playerList').appendChild(newChild);
    document.getElementById(elementID).setAttribute('disabled', 'true');
    document.getElementById(elementID).style.backgroundColor = "#fb1d72"
}


document.getElementById('fatiBTN').addEventListener('click', function () {
    addSelectedPlayer('fatiBTN', 'Ansu Fati');
})
document.getElementById('lewaBTN').addEventListener('click', function () {
    addSelectedPlayer('lewaBTN', 'Lewandowski');
})
document.getElementById('raphinhaBTN').addEventListener('click', function () {
    addSelectedPlayer('raphinhaBTN', 'Raphinha');
})
document.getElementById('pedriBTN').addEventListener('click', function () {
    addSelectedPlayer('pedriBTN', 'Pedri');
})
document.getElementById('dembeleBTN').addEventListener('click', function () {
    addSelectedPlayer('dembeleBTN', 'Dembele');
})
document.getElementById('ferranBTN').addEventListener('click', function () {
    addSelectedPlayer('ferranBTN', 'Ferran Torres');
})
document.getElementById('frenkieBTN').addEventListener('click', function () {
    addSelectedPlayer('frenkieBTN', 'De jong');
})
document.getElementById('sergioBTN').addEventListener('click', function () {
    addSelectedPlayer('sergioBTN', 'Busquets');
})
document.getElementById('aroaujoBTN').addEventListener('click', function () {
    addSelectedPlayer('aroaujoBTN', 'Aroaujo');
})
document.getElementById('ericBTN').addEventListener('click', function () {
    addSelectedPlayer('ericBTN', 'Eric Garcia');
})
document.getElementById('koundeBTN').addEventListener('click', function () {
    addSelectedPlayer('koundeBTN', 'Kounde');
})
document.getElementById('stegenBTN').addEventListener('click', function () {
    addSelectedPlayer('stegenBTN', 'Ter Stegen');
})

document.getElementById('calculateTotalCost').addEventListener('click', function () {
    calculateTotalCost();
})