import { getSeries } from './generics/getSeries';

getSeries(1)
    .then( resp => console.log( resp ) )
    .catch( error => console.log( error ) )
    .finally( () => console.log( 'Fin de getSeries' ) )