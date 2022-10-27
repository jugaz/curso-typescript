export const printObject = (argument:any) => {
    console.log( argument )
}

export function genericF<T>(argument:T):T {
    return argument
}

export const genericFArrow = <T>(argument:T) => argument;