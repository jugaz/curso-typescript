function printToConsole ( constructor: Function ) {
    console.log(constructor)
}

const printToConsoleConditional = (print:boolean = false):Function => {
    if(print) {
        return printToConsole
    }
    else {
        return () => {}
    }
}

const bloquearPrototipo = function( constructor:Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}


function CheckValid() {
    return function ( target:any, propertyKey: string , descriptor: PropertyDescriptor) {
        console.log({
            target,
            propertyKey,
            descriptor
        })
    }
}


@bloquearPrototipo
@printToConsoleConditional( true )
export class Series {
    public publicApi: string = 'https://fernando-herrera.com/'
    constructor(
        public name:string
    ){}

    @CheckValid()
    saveSeriesToDB( id:number ) {
        console.log(`Serie guardado en la DB ${id}`)
    }
}