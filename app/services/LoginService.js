export default async function callLoginApi(username, password){
    
    const url = 'http://192.168.0.235:5000/api/v1/users/login'

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
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