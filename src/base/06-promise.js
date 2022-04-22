import { personajeH } from "./05-heroes-id"

export const getIdPromesa = (id)=>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const personaje1 =  personajeH(id)
            if(personaje1){
                resolve(personaje1)
            }
            else{
                reject(`No se encontro el personaje con el id ${id}`)
            }
        }, 2000)
    })
}