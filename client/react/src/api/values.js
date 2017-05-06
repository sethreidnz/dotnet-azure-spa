import ApiConfig from './apiConfig'
const valuesEndpoint = `${ApiConfig.apiHost}/api/values`

export const getValues = async () => {
    var response = await fetch(valuesEndpoint, { credentials: 'include' })
    return await response.json()
}