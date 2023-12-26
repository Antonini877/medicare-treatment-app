
export async function getHistory(apiKey){
    const url = 'http://192.168.0.235:5000/api/v1/occurrences'

    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Api-Key':apiKey
            }
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

export async function getHistoryGrouped(apiKey){
    const url = 'http://192.168.0.235:5000/api/v1/occurrences/grouped/byday'

    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Api-Key':apiKey
            }
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

export async function addOccurrence(apiKey, data){
    const url = 'http://192.168.0.235:5000/api/v1/occurrences'
    
    var requestData = data

    try {

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Api-Key':apiKey
            },
            body: JSON.stringify(requestData)
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