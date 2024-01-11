import requestApi from "./ApiCallService"


export async function getHistory(apiKey){
    const url = 'http://servidor-sp.lbertini.com:5000/api/v1/occurrences'

    return await requestApi(url, 'GET', null, {'Api-Key':apiKey})

}

export async function getHistoryGrouped(apiKey){
    const url = 'http://servidor-sp.lbertini.com:5000/api/v1/occurrences/grouped/byday'

    return await requestApi(url, 'GET', null, {'Api-Key':apiKey})

}

export async function getHistoryGroupedDayPeriod(apiKey){
    const url = 'http://servidor-sp.lbertini.com:5000/api/v1/occurrences/grouped/bydayperiod'

    return await requestApi(url, 'GET', null, {'Api-Key':apiKey})

}

export async function addOccurrence(apiKey, data){
    const url = 'http://servidor-sp.lbertini.com:5000/api/v1/occurrences'
    
    return await requestApi(url, 'POST', data, {'Api-Key':apiKey})

}