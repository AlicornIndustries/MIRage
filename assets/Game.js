var Mirage = Mirage || {};

Mirage.Constants = {
    GAME_SPEED: 800
}

Mirage.Game = {};
Mirage.Game.init = function () {
    // Setup station and player
    this._station = Mirage.Station;
    this._station.init({
        name: "MIRage",
        oxygen: 200,
        energy: 100
    })
    this._player = new Mirage.Entity(Mirage.Entities.PlayerTemplate);
    this.startGame();
}
Mirage.Game.update = function() {
    // Call updates for objects
    this._station.update();
}

Mirage.Game.startGame = function() {
    console.log("You power on the " + this._station.getName());
    console.log("Your name is " + this._player.getName())
    // Board the station
    if(!this._station.embarkEntity(this._player)) {
        console.log("Error: failed to embark station");
    }
}

// Finally, call the game's init function and get things going
Mirage.Game.init();





// Mirage.Game.startGame = function() {
//     this.gameActive = true;
//     this.previousTime = null;
//     this.ui.notify("You power on the space station.");

//     this.step();
// }
// // Game loop
// Mirage.Game.step = function(timestamp) {
//     // Set up previousTime for the first time
//     if(!this.previousTime) {
//         this.previousTime = timestamp;
//         this.updateGame();
//     }
//     // Time difference
//     var deltaT = timestamp - this.previousTime;
//     // Game update
//     if(progress >= Mirage.Constants.GAME_SPEED) {
//         this.previousTime = timestamp;
//         this.updateGame();
//     }

//     // we use "bind" so that we can refer to the context "this" inside of the step method
//     if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
// }

// // Update game stats
// Mirage.Game.updateGame = function() {
//     // Update values for game objects
//     this.station.updateResources();
//     // Refresh displays
//     this.ui.refreshStats();
// }
// Mirage.Game.pause = function() {
//     this.gameActive = false;
// };
// Mirage.Game.resume = function() {
//     this.gameActive = true;
//     this.step();
// }
