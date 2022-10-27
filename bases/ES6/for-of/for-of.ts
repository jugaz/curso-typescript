(() => {

    type Avenger = {
        name: string,
        weapon: string;
    }

    const iroman: Avenger = {
        name: 'Iroman',
        weapon: 'ArmorSuit'
    }

    const captianAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ iroman, captianAmerica, thor]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }

})()