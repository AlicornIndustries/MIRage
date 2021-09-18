var Mirage = Mirage || {};

Mirage.Entity = function(properties) {
    properties = properties || {};
    // Instantiate properties from the passed object
    this._name = properties["name"] || "";
    this._species = properties["species"] || "";
    this._oxygenConsumption = properties["oxygenConsumption"] || 0;
    this._alive = true;
}
// Getters, setters
Mirage.Entity.prototype.setName = function(name) {this._name = name; }
Mirage.Entity.prototype.getName = function() {return this._name; }
Mirage.Entity.prototype.setSpecies = function(name) {this._species = species; }
Mirage.Entity.prototype.getSpecies = function() {return this._species; }
Mirage.Entity.prototype.setOxygenConsumption = function(oxygenConsumption) {this._oxygenConsumption = oxygenConsumption; }
Mirage.Entity.prototype.getOxygenConsumption = function() {return this._oxygenConsumption; }