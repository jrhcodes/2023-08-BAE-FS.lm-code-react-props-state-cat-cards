import { v4 as uuidv4 } from 'uuid';

import defaultCatArray from './cat-data';
import defaultDogArray from './dog-data';


export default interface Pet {
    name: string;
    species: string;
    favFoods: Array<string>; 
    birthYear: number;
    key: string; // no need to make id optional, see below
  }

export const defaultPetArray : Array<Pet> = [  ...defaultCatArray, ...defaultDogArray ].map(cat => { return {...cat, key : uuidv4()}}); 