import { URL_SERVER } from "../server/server_url"
export const postSuma = (formData) => {
    const options = {
        method:'POST',
        body:JSON.stringify(formData),
        headers:{
            'Content-type':'application/json'
        }
    }

    fetch(`${URL_SERVER}/api/operaciones/suma`, options)
    .then((res) => res.ok ? res.json():res.json())
    .then((data) => {alert(data.resultado)})
    .catch((err) => console.log(err.message))
}

export const getSumas = (setSumas) => {
    const options = {
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    }

    fetch(`${URL_SERVER}/api/operaciones/`, options)
    .then(res => res.ok? res.json():res.json())
    .then((data) => {
        console.log(data.sumas)
        setSumas(data.sumas)
    })
    .catch((err) => console.log(err.message));
}