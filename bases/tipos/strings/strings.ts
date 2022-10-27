(() => {
    // const batman = 'Bat\'man';
    const batman: string = 'Batman';
    const linternaVerde: string = "Literna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;


    console.log({ batman:`I'm ${batman}` });
    console.log({ linternaVerde:linternaVerde.toUpperCase() });
    console.log( { batman: batman[10]?.toUpperCase()  || 'No está presente' })
    
})();
