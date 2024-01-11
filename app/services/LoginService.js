import requestApi from "./ApiCallService"

export default async function callLoginApi(username, password){
    
    const url = 'http://servidor-sp.lbertini.com:5000/api/v1/users/login'

    const requestBody = JSON.stringify({
        username: username,
        password: password
    })

    return await requestApi(url, 'POST', requestBody)

}