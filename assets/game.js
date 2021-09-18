var Game = {
    _player: null,
    init: function() {
        // Create a player
        this._player = new Player("Autumn");
        // TODO: helper function to bind to events
    },
    getPlayer: function() {return this._player;}
}

var Player = function(name) {
    this._name = name
}

// Station with Resources (Uranium, Water, Oxygen, Food, Biomass
// World with Time/Unix Time

// Input handling
function mainInputPress() {
    var input = document.getElementById("mainInputButton").value;
    document.getElementById("demo").innterHTML = input;
    alert(input);
}


// Core game "loop"
window.onload = function () {
    Game.init();
    //document.getElementById("demo").innerHTML = "Hello, " + Game.getPlayer()._name; // TODO: figure out objects
}