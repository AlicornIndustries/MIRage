var Mirage = Mirage || {};

Mirage.UI = {};

// Show a notification in the message area
Mirage.UI.notify = function(message) {
    console.log(message);
}

// Refresh stats display
Mirage.UI.refreshStats = function() {
    console.log(this.station);
}