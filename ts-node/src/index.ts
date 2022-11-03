import { Series } from './decorators/series-class';


const friends = new Series('Friends');

// (Series.prototype as any).customName = 'A'

// friends.saveSeriesToDB(2)

friends.publicApi = 'https://fernando-herrera.com'
console.log("friends",friends)