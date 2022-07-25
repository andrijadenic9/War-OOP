let dwarfWar = document.querySelector('.dwarf-place');
let orkWar = document.querySelector('.ork-place');
let warField = document.querySelector('.war-field');
let warBtn = document.querySelector('.war-btn');

warBtn.addEventListener('click', startWar);

function startWar() {
    warBtn.style.display = 'none';

    // * FIGHT OVER AND OVER
    let loop = setInterval(startFight, 1100);

    function startFight() {
        // * SET RANDOM DWARF WARRIOR
        let randomNumberDwarf = Math.floor(Math.random() * dwarfArmy.length);
        let randDwarf = dwarfArmy[randomNumberDwarf];
        let currentDwarf = document.querySelector(`[dwarf-id="${randDwarf.id}"]`);

        // * SET RANDOM ORK WARRIOR
        let randomNumberOrk = Math.floor(Math.random() * orkArmy.length);
        let randOrk = orkArmy[randomNumberOrk];
        let currentOrk = document.querySelector(`[ork-id="${randOrk.id}"]`);

        // * RANDOM DWARF ATTACK RANDOM ORK AND CONVERSELY (IT IS POSSIBLE FOR THEM TO KILL EACH OTHER)
        randOrk.health = randOrk.health - randDwarf.attack;
        randDwarf.health = randDwarf.health - randOrk.attack;

        // * WE ARE CHECKING IF THAT DWARF IS DEAD
        if (randDwarf.health <= 0) {
            dwarfArmy.splice(randomNumberDwarf, 1);
            randDwarf.health = 0;
            currentDwarf.style.backgroundColor = 'tomato';
        } else {
            currentDwarf.style.backgroundColor = 'green';
        }

        // * WE ARE CHECKING IF THAT ORK IS DEAD
        if (randOrk.health <= 0) {
            orkArmy.splice(randomNumberOrk, 1);
            randOrk.health = 0;
            currentOrk.style.backgroundColor = 'tomato';
        } else {
            currentOrk.style.backgroundColor = 'green';
        }

        // * DISPLAY FIGHTING WARRIORS
        displayDwarfInfo(randDwarf)
        displayOrkInfo(randOrk)

        // * CHECK IF THERE IS A WINNER
        checkWinner(orkArmy, dwarfArmy, loop, 'Orcs', randOrk);
        checkWinner(dwarfArmy, orkArmy, loop, 'Dwarves', randDwarf);

    }
}

function checkWinner(winnerArmyNumber, looserArmyNumber, interval, warriors, lastAttack) {
    // ? CHECKING WITCH MESSAGE TO BE PASSED FOR THE WINNER TEAM
    if (looserArmyNumber.length === 0 && winnerArmyNumber.length > 0) {
        clearInterval(interval);
        let deadLastMan = '';
        if (lastAttack.type === 'Dwarf' && lastAttack.health <= 0) {
            let lastWarrior = document.querySelector(`[dwarf-id="${lastAttack.id}"]`);
            lastWarrior.style.border = '5px solid green';
            deadLastMan = '<h3>Unfortunately, he gave his life for victory!</h3>';
        } else if (lastAttack.type === 'Ork' && lastAttack.health <= 0) {
            let lastWarrior = document.querySelector(`[ork-id="${lastAttack.id}"]`);
            lastWarrior.style.border = '5px solid green';
            deadLastMan = '<h3>Unfortunately, he gave his life for victory!</h3>';
        }
        (winnerArmyNumber.length === 1) ? warField.innerHTML = `<h2>The ${warriors} won with ${winnerArmyNumber.length} surviving warrior!</h2><p>The last blow was dealt by <span class="last-man-standing">${lastAttack.name}</span> using <span class="last-man-standing">${lastAttack.weapon.name}</span> as a weapon.</p><p>${lastAttack.icon}</p>${deadLastMan}` : warField.innerHTML = `<h2>The ${warriors} won with ${winnerArmyNumber.length} surviving warriors!</h2><p>The last blow was dealt by <span class="last-man-standing">${lastAttack.name}</span> using <span class="last-man-standing">${lastAttack.weapon.name}</span> as a weapon.</p><p>${lastAttack.icon}</p>${deadLastMan}`;
        warField.style.display = 'flex';

        // ? IT CAN BE DRAW IF ONLY TWO WARRIORS FROM BOTH SIDES KILL EACH OTHER, LIKE IN REAL WORLD THE LAST MAN STANDING CAN BE DEAD AFTER KILLING HIS OPPONENT FROM GIVEN WOUNDS.
    } else if (winnerArmyNumber.length === 0 && looserArmyNumber.length === 0) {
        clearInterval(interval);
        warField.innerHTML = '<div style="text-align: center; font-size: 20px;"><p>There is no winner in this war as in any other.</p><p>All are losers in the war !!!</p></div>';
        warField.style.display = 'flex';
    }
}