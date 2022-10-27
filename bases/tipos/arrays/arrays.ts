(() => {
  
    // const numbers:(string | number | boolean)[] = [1,2,3,4,5,'6',7,8,10];
    const numbers: number[] = [1,2,3,4,5,6,7,8,10];
    const villians = ['Thanos', 'Loki', 'Venom'];

    villians.forEach(v => {
        console.log(v.toUpperCase())
    });

    numbers.push(11)

    console.log(numbers);
    console.log({numbers});
    

})()
