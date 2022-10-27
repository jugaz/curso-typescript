(() => {

    type Hero = {
        name: string,
        age?: number, 
        powers: number[], 
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero)  = 'Jesús';
    
    console.log({
        myCustomVariable: typeof myCustomVariable
    })

    myCustomVariable = 20

    console.log({
        myCustomVariable: typeof myCustomVariable
    })

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }

    console.log({
        myCustomVariable: typeof myCustomVariable
    })

})()