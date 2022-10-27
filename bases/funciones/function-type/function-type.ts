(()=> {

    const addNumber = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;

    let myFunction: () => string;

    //* myFunction = 10;
    //* console.log(myFunction)

    // myFunction: (x:number, w:number) => number;
    // myFunction = addNumber
    // console.log(myFunction(1,2))

    // ? myFunction: (a:string) => string;
    // ? myFunction = greet
    // ? console.log(myFunction('Jesús'))

    myFunction = saveTheWorld
    console.log(myFunction())


})()