(() => {

    type Hero = {
        name: string,
        age?: number, 
        powers: number[], 
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    }
    
    let superman: Hero = {
        name: 'Clark Klent',
        age: 24,
        powers: [1],
        getName() {
            return this.name
        },
    }

    console.log({
        flash,
        superman
    })

})()