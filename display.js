let dwarfField = document.querySelector('.dwarf-field');
let orkField = document.querySelector('.ork-field');
let dwarfInfo = document.querySelector('.dwarf-info');
let orkInfo = document.querySelector('.ork-info');

displayDwarfArmy();

// * MAKE CLASSES AND ID'S FOR ALL DWARFS SO THEY CAN BE A BIT DIFFERENT
function displayDwarfArmy() {
    let counterDwarf = 0;
    dwarfArmy.forEach(dwarf => {
        let newDwarf = document.createElement('div');
        if (dwarf.name === 'Hjoldur Blackstorm') {
            newDwarf.className = 'dwarf hjoldur-blackstorm';
            newDwarf.setAttribute('dwarf-id', counterDwarf);
        } else if (dwarf.name === 'Hulnum Battlebleeder') {
            newDwarf.className = 'dwarf hulnum-battlebleeder';
            newDwarf.setAttribute('dwarf-id', counterDwarf);
        } else if (dwarf.name === 'Torgrum Lulbruhk') {
            newDwarf.className = 'dwarf torgrum-lulbruhk';
            newDwarf.setAttribute('dwarf-id', counterDwarf);
        } else if (dwarf.name === 'Muirthran Mutgak') {
            newDwarf.className = 'dwarf muirthran-mutgak';
            newDwarf.setAttribute('dwarf-id', counterDwarf);
        } else if (dwarf.name === 'Krumgrun Draekerehr') {
            newDwarf.className = 'dwarf krumgrun-draekerehr';
            newDwarf.setAttribute('dwarf-id', counterDwarf);
        }
        counterDwarf++;
        newDwarf.addEventListener('mouseenter', () => {
            displayDwarfInfo(dwarf);
        });
        dwarfField.appendChild(newDwarf);
    });
}

displayOrkArmy();

// * MAKE CLASSES AND ID'S FOR ALL ORKS SO THEY CAN BE A BIT DIFFERENT
function displayOrkArmy() {
    let counterOrk = 0;
    orkArmy.forEach(ork => {
        let newOrk = document.createElement('div');
        if (ork.name === 'Grak The Angry') {
            newOrk.className = 'ork grak-the-angry';
            newOrk.setAttribute('ork-id', counterOrk);
        } else if (ork.name === 'Nug The Crazy') {
            newOrk.className = 'ork nug-the-crazy';
            newOrk.setAttribute('ork-id', counterOrk);
        } else if (ork.name === 'Durdul The Merciless') {
            newOrk.className = 'ork durdul-the-merciless';
            newOrk.setAttribute('ork-id', counterOrk);
        } else if (ork.name === 'Grohruk The Anguished') {
            newOrk.className = 'ork grohruk-the-anguished';
            newOrk.setAttribute('ork-id', counterOrk);
        } else if (ork.name === 'Jartokk The Enormous') {
            newOrk.className = 'ork jartokk-the-enormous';
            newOrk.setAttribute('ork-id', counterOrk);
        }
        counterOrk++;
        newOrk.addEventListener('mouseenter', () => {
            displayOrkInfo(ork);
        });
        orkField.appendChild(newOrk);
    });
}

// ? DISPLAY DWARF IN INFO SECTION
function displayDwarfInfo(dwarf) {
    dwarfInfo.style.display = 'flex';
    let text = `<div><h2>${dwarf.name}</h2>`;
    text += `<div class="health-div"><h3>Health: </h3><h2>${dwarf.health}</h2></div>`
    text += `<p>With powerfull weapon: <strong>${dwarf.weapon.name}</strong></p>`;
    text += `<p>that takes <strong>${dwarf.weapon.damage} damage!</strong></div>`
    text += `<div>${dwarf.icon}</div>`;
    dwarfInfo.innerHTML = text;
}

// ? DISPLAY ORK IN INFO SECTION
function displayOrkInfo(ork) {
    orkInfo.style.display = 'flex';
    let text = `<div>${ork.icon}</div>`;
    text += `<div><h2>${ork.name}</h2>`;
    text += `<div class="health-div"><h3>Health: </h3><h2>${ork.health}</h2></div>`
    text += `<p>With powerfull weapon: <strong>${ork.weapon.name}</strong></p>`;
    text += `<p>that takes <strong>${ork.weapon.damage} damage!</strong></div>`
    orkInfo.innerHTML = text;
}