let orkArmy = [];

// * OKRS FUNCTION CONSTRUCTOR
function Ork(id) {
    this.type = 'Ork'
    this.name = ['Grak The Angry', 'Nug The Crazy', 'Durdul The Merciless', 'Grohruk The Anguished', 'Jartokk The Enormous'][Math.floor(Math.random() * 5)];
    this.id = id;
    this.weapon = getOrkWeapon();
    this.attack = this.weapon.damage
    this.health = Math.ceil(Math.random() * (100 - 50) + 50);
    this.icon = function () {
        if (this.name === 'Grak The Angry') {
            this.icon = '<img class="info-img" src="/images/orks/ork1.png">';
        } else if (this.name === 'Nug The Crazy') {
            this.icon = '<img class="info-img" src="/images/orks/ork3.png">';
        } else if (this.name === 'Durdul The Merciless') {
            this.icon = '<img class="info-img" src="/images/orks/ork2.png">';
        } else if (this.name === 'Grohruk The Anguished') {
            this.icon = '<img class="info-img" src="/images/orks/ork4.png">';
        } else if (this.name === 'Jartokk The Enormous') {
            this.icon = '<img class="info-img" src="/images/orks/ork5.png">';
        }
    }
    this.icon();
}

// * CHOOSEING A RANDOM WEAPON FOR EACH WARRIOR
function getOrkWeapon() {
    let weapon = [new Tankhammer(), new Choppa(), new GrabbaStikk(), new Grotwhip(), new GrotProd()];
    let random = Math.floor(Math.random() * weapon.length);
    return weapon[random];
}

makeOrkArmy()

// * MAKEING A LOT OF WARRIORS
function makeOrkArmy() {
    for (let i = 0; i < soldierNumber; i++) {
        orkArmy.push(new Ork(i));
    }
}

// * ORK WEAPONS
function Tankhammer() {
    this.name = 'Tankhammer';
    this.damage = 101;
}
function Choppa() {
    this.name = 'Choppa';
    this.damage = 84;
}
function GrabbaStikk() {
    this.name = 'Grabba Stikk';
    this.damage = 48;
}
function Grotwhip() {
    this.name = 'Grotwhip';
    this.damage = 76;
}
function GrotProd() {
    this.name = 'Grot-Prod';
    this.damage = 32;
}