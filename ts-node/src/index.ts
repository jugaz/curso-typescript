import { getSeries } from './generics/get-series';

getSeries(1)
    .then( friends => console.log( "f",friends ) )
    .catch( error => console.log( error ) )
    .finally( () => console.log( 'Fin de getSeries' ) )