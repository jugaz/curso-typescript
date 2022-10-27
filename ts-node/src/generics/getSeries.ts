import axios from 'axios'
import { Series } from '../interfaces/';


export const getSeries = async( id: number): Promise<Series> => {

    const resp =  await axios.get<Series>(`https://jugaz.github.io/series-tv-api/json/friends/${id}.json`)
    console.log( "resp",resp.data.picture )
    return resp.data
}