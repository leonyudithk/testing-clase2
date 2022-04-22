export const getImagen = async ()=>{

    try{

        const apiKey = 'RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu';
        const api = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

        const resp = await fetch(api)
        const {data} = await resp.json()

        const {url} = data.images.original

        return url

    }
    catch(err){
        console.log(err);
        return err
    }
}