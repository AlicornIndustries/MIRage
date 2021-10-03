var Mirage = Mirage || {};

Mirage.StationModule = function(properties) {
    properties = properties || {};
    // Instantiate properties from the passed object
    this._name = properties["name"] || "";
    this._maxDurability = properties["maxDurability"] || 0;
    this._durability = properties["durability"] || this._maxDurability;
    this._energyOutput = properties["energyOutput"] || 0;
    this._canDock = properties["canDock"] || false;

    // TODO: entityCapacity (0 for solar array)
    this._entityCapacity = properties["entityCapacity"] || 0;
    if(this._entityCapacity > 0) {
        this._entities = new Array(this._entityCapacity);
    }

}
// Getters, setters
Mirage.StationModule.prototype.getName = function() {return this._name; }
Mirage.StationModule.prototype.setName = function(name) {this._name = name; }
Mirage.StationModule.prototype.getDurability = function() {return this._durability; }
// TODO:  durability <= 0 handling for destruction
Mirage.StationModule.prototype.setDurability = function(durability)  {this._durability = durability; }
Mirage.StationModule.prototype.getMaxDurability = function() {return this._maxDurability; }
Mirage.StationModule.prototype.getEnergyOutput = function() {return this._energyOutput; }
Mirage.StationModule.prototype.setEnergyOutput = function(energyOutput) {this._energyOutput = energyOutput; }
Mirage.StationModule.prototype.getEntityCapacity = function() {return this._entityCapacity; }
Mirage.StationModule.prototype.getEmptyEntitySlot = function() {
    // Returns index of empty slot if there is one, returns -1 if no empty slots found
    if(this._entityCapacity < 1) {return -1; }
    for(var i=0; i<this._entities.length; i++) {
        if(this._entities[i] == null) {
            return i
        }
    }
    return -1; // no empty slots found

}


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