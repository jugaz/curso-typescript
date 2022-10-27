import { printObject, genericF, genericFArrow } from '../generics/generics';
import { Villain, Hero } from '../interfaces';
import { getSeries } from '../generics/get-series';

// printObject(123);
// printObject(new Date())
// printObject( {a:1 ,b:2, c:3} )
// printObject( [1,2,3,4,5,6,7,8,9,10] )
// printObject( 'Hola Mundo' )

// console.log( genericF(3.1416).toFixed(2) )
// console.log( genericF('Hola mundo').toLocaleUpperCase() )
// console.log( genericFArrow(new Date() ).getDate() )

const deadpool = {
    name: 'DeadPool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
}

/* Calling the genericFArrow function with the type of Villain. */
console.log( genericFArrow<Villain>(deadpool) )

getSeries(1)
    .then( friends => console.log( "f",friends ) )
    .catch( error => console.log( error ) )
    .finally( () => console.log( 'Fin de getSeries' ) )