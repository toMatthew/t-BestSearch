
const baseUrl = `/api/interview`

const err = (httpCode) =>{
    return {
        code: httpCode
    }
}

const http = {
    async post (url, options){
        const response = await fetch(baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(options),
            headers: {
                'Content-Type': 'application/json'
                },
        })
        const httpCode = response.status
        if(httpCode !== 200) {
            return err(httpCode)
        } else {
            const result = await response.json()
            return result
        }

    }, 
    async get (url, options){
        const response = await fetch(baseUrl + url, {
            method: 'GET',
            body: JSON.stringify(options),
            headers: {
                'Content-Type': 'application/json'
                },
        })
        const httpCode = response.status
        if(httpCode !== 200) {
            return err(httpCode)
        } else {
            const result = await response.json()
            return result
        }
    }, 
}

export default http;