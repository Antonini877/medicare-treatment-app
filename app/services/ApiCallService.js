export default async function requestApi(url, httpMethod, body=null, additionalHeaders={}){

    const requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
        
    try {
        let response = await fetch(url, {
            method: httpMethod,
            headers: {...requestHeaders, ...additionalHeaders},
            body: body
        })


        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`)
            return null
        }

        const data = await response.json()
        return data
    
    } catch (error) {
        console.error('Error:', error)
        return null
    }
}
