var Mirage = Mirage || {}; // set up namespace. We'll set up this Mirage object in each file so we don't pollute the global scope

Mirage.Station = {}

Mirage.Station.init = function(stats) {
    this._name = stats.name;
    this._oxygen = stats.oxygen;
    this._energy = stats.energy;
    // TODO: have a "resources" sub-object or something

    // Setup modules
    this._modules = new Array(3); // TODO: change whole module "storage" system to use links
    this._modules[0] = new Mirage.StationModule(Mirage.StationModules.ControlModule);
    this._modules[1] = new Mirage.StationModule(Mirage.StationModules.SolarArray);
    this._modules[2] = new Mirage.StationModule(Mirage.StationModules.DockingModule);

    // entities are e.g. crewmembers, passengers
    // Sum entity capacity of each module
    // var entitySlotsNeeded = 0;
    // this._modules.forEach(module => {
    //     if(module) {
    //         entitySlotsNeeded += module.getEntityCapacity();
    //     }
    // })
    // this._entities = new Array(entitySlotsNeeded);
};
// Getters and setters
Mirage.Station.setName = function(name) {this._name = name; }
Mirage.Station.getName = function() {return this._name; }

// Resource functions
Mirage.Station.update = function() {
    this.updateResources();
}
// TODO: refactor, probably save a total consumption value e.g. a tally of all entities' oxygen consumption
Mirage.Station.updateResources = function() {
    // modules
    this._modules.forEach(module => {
        if(module) {
            this._energy += module.getEnergyOutput();
        }
    })
    // // entities
    // this._entities.forEach(entity => {
    //     if(entity) {
    //         this._oxygen -= entity.getOxygenConsumption();
    //     }
    // })
}

// Take on passengers/entities
// Put entity in first available slot in a module. TODO: check canDock (put that in the module)
Mirage.Station.embarkEntity = function(entity) {
    for(var i=0; i<this._modules.length; i++) {
        if(this._modules[i]) {
            var entitySlot = this._modules[i].getEmptyEntitySlot();
            if(entitySlot >= 0) {
                // TODO: replace with proper getter/setter
                this._modules[i]._entities[entitySlot] = entity;
                console.log("Embarked module " + this._modules[i].getName());
                return true;
            }
        }
    }
    console.log("no slot found");
    // If no slot found...
    return false;
}


// testing function
Mirage.Station.statusReport = function() {
    // Station resources/stats
    console.log(
        "STATION: " + this._name,
        "\nOXYGEN: " + this._oxygen,
        "\nENERGY: " + this._energy
    )
    // Modules
    const modulesReport = this._modules.filter(function(smodule) {return smodule!=null});
    console.log("MODULES: " + modulesReport.length);
    modulesReport.forEach(smodule => {
        console.log (" - "+smodule.getName()+" - DUR: "+smodule.getDurability()+"/"+smodule.getMaxDurability());
    })

    // // Entities aboard
    // const entitiesReport = this._entities.filter(function(entity) {return entity!=null});
    // console.log("PASSENGERS: " + entitiesReport.length);
    // entitiesReport.forEach(entity => {
    //     console.log(" - " + entity.getName());
    // });
}