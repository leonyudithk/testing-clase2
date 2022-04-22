import { heroes } from "../data/dataHeroes"

export const personajeH = (id)=>{
    return heroes.find(hero=> hero.id === id);
}