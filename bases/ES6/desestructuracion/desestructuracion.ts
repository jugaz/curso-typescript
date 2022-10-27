(() => {
    type Avengers = {
        nick: string
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }
    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.12123
    }

    // const { poder, vision } = avengers

    // console.log({
    //     poder:poder.toFixed(2),
    //     vision:vision.toUpperCase()
    // })

    const printAvenger = ( { ironman , ...resto }:Avengers ) => {

        console.log( ironman, resto )
    }

    // printAvenger( avengers )

    const avengersArr: [ string, boolean, boolean] = ['Cap. América', true, false];

    const [ cap, iroman, seriaunNumero ] = avengersArr;
    // console.log({ iroman, cap })

})()