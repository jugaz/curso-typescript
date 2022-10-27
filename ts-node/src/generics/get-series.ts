import axios from 'axios'
import { Series } from '../interfaces';


export const getSeries = async( id: number): Promise<Series> => {

    const { data } =  await axios.get<Series>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data
}