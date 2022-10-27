import { Series } from './decorators/series-class';


const friends = new Series('Vue');

// (Series.prototype as any).customName = 'A'

friends.saveSeriesToDB(2)