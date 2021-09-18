var Mirage = Mirage || {};

Mirage.StationModule = function(properties) {
    properties = properties || {};
    // Instantiate properties from the passed object
    this._name = properties["name"] || "";
    this._maxDurability = properties["maxDurability"] || 0;
    this._durability = properties["durability"] || this._maxDurability;
    this._energyOutput = properties["energyOutput"] || 0;
    this._canDock = properties["canDock"] || false;

}
// Getters, setters
Mirage.StationModule.prototype.getName = function() {return this._name; }
Mirage.StationModule.prototype.setName = function(name) {this._name = name; }
Mirage.StationModule.prototype.getDurability = function() {return this._durability; }
// TODO:  durability <= 0 handling for destruction
Mirage.StationModule.prototype.setDurability = function(durability)  {this._durability = durability; }
Mirage.StationModule.prototype.getMaxDurability = function() {return this._maxDurability; }

// Modules will probably be done as a linked list of sorts?
/* Each module has links to other modules.
Modules:
    Control Module
    Habitat
    Propulsion
    Laboratory/Science
    Reactor
    Solar Array
    Docking
    Hydroponics

Start with intact Control Module
Modules have ModuleComponents? Arbitrary items, like a Mini-Reactor or a Monitor for the Control Module, a Bunk.


*/