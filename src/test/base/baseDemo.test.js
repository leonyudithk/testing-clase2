import { isLoggedIn } from "../../base/01-variable"
import { user } from "../../base/02-string"
import { getSaludo } from "../../base/03-funtion"
import { getUser } from "../../base/04-objeto"
import { personajeH } from "../../base/05-heroes-id"
import { getIdPromesa } from "../../base/06-promise"
import { getImagen } from "../../base/07-Api-Async-Await"
import { heroes } from "../../data/dataHeroes"

describe('Realizar Pruebas a todo lo que esta en la carpeta Base', () => {

    //---------01-Variable----------------/
    test('validar login es correcto', () => {
        // Arreglar preparar la mesa
        const isAutenticad = isLoggedIn

        //Actuar hacer la prueba
        if (isAutenticad) {
            console.log("Bienvenido usuario Autenticado")
        }
        else {
            throw new Error("El usuario no esta Autenticado")
        }

    })

    //-----------02-String--------------/
    test('validar el usuario', () => {
        //arreglar
        const validarUsuario = 'Frontend-9'
        //actuar
        expect(user).toBe(validarUsuario)

    })

    //-----------03-funtion----------------/
    test('verificar el nombre', () => {
        //arreglar
        const nombre = 'Frontend-9'
        const saludo = getSaludo(nombre)

        //actuar
        expect(saludo).toBe(`Hola ${nombre}, eres Bienvenido`)
        expect(saludo).not.toBe(`Hola ${nombre}`)

    })

    //--------04-objeto---------------/
    test('obtener el objeto', () => {

        //Arreglar y actuar
        expect(getUser()).toEqual({
            name: 'Frontend-9',
            pass: 'F9123'
        })
    })

    //--------------05 Heroes filtrado-------------//
    test('retornar personaje filtrando a partir del id', () => {

        const id = 2
        const personajeHFuncion = personajeH(id)
        console.log(personajeHFuncion, 'el de el componente')

        const personajePrueba = heroes.find(hero => hero.id === id);
        console.log(personajePrueba, 'el de la prueba')

        //hacer la prueba
        expect(personajeHFuncion).toEqual(personajePrueba);

    })

    //------------ cuando no existe el id----------//
    test('retornar un personaje con id que no existe', ()=>{
        const id= 9
        const personajeHFuncion = personajeH(id)
        console.log(personajeHFuncion)

        expect(personajeHFuncion).toBe(undefined)
    })

    //--------------06 promesas--------------////
    test('traer personaje de forma correcta', (done) =>{
       const id = 4
     //  const heroeApi = heroes.find(hero => hero.id === id)
      
       getIdPromesa(id)
        .then(resp=>{
            expect(resp).toEqual(heroes[3])
            //expect(resp).toBe(heroeApi)
            done()
        })

    })

    //------07 Api Async Await--------------------//
    test('verificar la url de imagen', async ()=>{

        const url = await getImagen()
        console.log(url)

        expect(typeof url).toBe('string')
        expect(url.includes('https://')).toBe(true)

    })
})