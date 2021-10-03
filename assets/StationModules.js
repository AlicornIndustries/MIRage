var Mirage = Mirage || {};

Mirage.StationModules = {}
Mirage.StationModules.ControlModule = {
    name: "Control Module",
    maxDurability: 100,
    energyOutput: -10,
    canDock: false,
    entityCapacity: 3
}
Mirage.StationModules.SolarArray = {
    name: "Solar Array",
    maxDurability: 30,
    energyOutput: 5,
    canDock: false
}
Mirage.StationModules.DockingModule = {
    name: "Docking Module",
    maxDurability: 100,
    energyOutput: -1,
    canDock: true,
    entityCapacity: 2
}