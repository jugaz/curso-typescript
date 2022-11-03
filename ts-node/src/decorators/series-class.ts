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
        const originalMethod = descriptor.value
        descriptor.value = (id:number) => {
            if( id < 1 || id > 5) {
                return console.log('El id dek pokemon debe estar entre 1 y 5')
            }
            else {
               return  originalMethod(id)
            }
        }
    }
}


function readonly( isWritable: boolean = true ):Function {
    return function( target:any, propertyKey: string){

        const descriptor:PropertyDescriptor = {

            get() {
                console.log(this)
                return 'Jesús'
            },

            set( this, val ) {
                // console.log(this,val)
                Object.defineProperty( this, propertyKey, {
                    value:val,
                    writable: !isWritable,
                    enumerable: false

                })
            },

        }
        return descriptor
    }
}


@bloquearPrototipo
@printToConsoleConditional( false )
export class Series {
    @readonly(true)
    public publicApi: string = 'https://fernando-herrera.com/'
    constructor(
        public name:string
    ){}

    @CheckValid()
    saveSeriesToDB( id:number ) {
        console.log(`Serie guardado en la DB ${id}`)
    }
}