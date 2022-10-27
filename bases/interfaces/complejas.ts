(()=> {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAdress( id:string ):string;
    }

    interface Address {
        id: number, 
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Jesús',
        age: 25,
        address: {
            id: 125, 
            zip: 'KY2 XAD',
            city: 'Lima'
        },
        getFullAdress( id:string ) {
            return this.address.city
        },
    }

    const client2: Client = {
        name: 'Fio',
        age: 25,
        address: {
            city:'Comas',
            zip:'AXD 123',
            id:125
        },
        getFullAdress( id:string ) {
            return this.address.city
        },
    }
    console.log(client, client2)

 

})()