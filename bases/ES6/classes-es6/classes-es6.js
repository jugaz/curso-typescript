(() => {
    
    class Avenger { 
        constructor( name = '' , power = 0) {
            this.name = name;
            this.power = power;
        }
    }


    class FlyingAvengers extends Avenger {
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9999)
    const falcon = new FlyingAvengers('Flacon',50)


    console.log( hulk )
    console.log( falcon )

})()