// ? THIS VARIABLE CONTROL HOW MANY WARRIORS WOULD BOTH ARMY HAVE
let soldierNumber = 12;

let dwarfArmy = [];

// * DWARF FUNCTION CONSTRUCTOR
function Dwarf(id) {
    this.type = 'Dwarf';
    this.name = ['Hjoldur Blackstorm', 'Hulnum Battlebleeder', 'Torgrum Lulbruhk', 'Muirthran Mutgak', 'Krumgrun Draekerehr'][Math.floor(Math.random() * 5)];
    this.id = id;
    this.weapon = getDwarfWeapon();
    this.attack = this.weapon.damage;
    this.health = Math.ceil(Math.random() * (100 - 50) + 50);
    this.icon = function () {
        if (this.name === 'Hjoldur Blackstorm') {
            this.icon = '<img class="info-img" src="images/dwarfs/dwarf1.png">';
        } else if (this.name === 'Hulnum Battlebleeder') {
            this.icon = '<img class="info-img" src="images/dwarfs/dwarf2.png">';
        } else if (this.name === 'Torgrum Lulbruhk') {
            this.icon = '<img class="info-img" src="images/dwarfs/dwarf3.png">';
        } else if (this.name === 'Muirthran Mutgak') {
            this.icon = '<img class="info-img" src="images/dwarfs/dwarf4.png">';
        } else if (this.name === 'Krumgrun Draekerehr') {
            this.icon = '<img class="info-img" src="images/dwarfs/dwarf5.png">';
        }
    }
    this.icon();
}

// * CHOOSEING A RANDOM WEAPON FOR EACH WARRIOR
function getDwarfWeapon() {
    let weapon = [new Axe(), new Sword(), new Mattock(), new Hammer(), new Bow()];
    let random = Math.floor(Math.random() * weapon.length);
    return weapon[random];
}

makeDwarfArmy();

// * MAKEING A LOT OF WARRIORS
function makeDwarfArmy() {
    for (let i = 0; i < soldierNumber; i++) {
        dwarfArmy.push(new Dwarf(i));
    }
}

// * DWARF WEAPONS
function Axe() {
    this.name = 'Axe';
    this.damage = 101;
}
function Sword() {
    this.name = 'Sword';
    this.damage = 84;
}
function Mattock() {
    this.name = 'Mattock';
    this.damage = 48;
}
function Hammer() {
    this.name = 'Hammer';
    this.damage = 76;
}
function Bow() {
    this.name = 'Bow';
    this.damage = 32;
}
