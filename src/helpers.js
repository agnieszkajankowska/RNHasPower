import {animalTypes} from "./constants";

const min = 0;
const max = animalTypes.length - 1;
export const getRandomInt = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};