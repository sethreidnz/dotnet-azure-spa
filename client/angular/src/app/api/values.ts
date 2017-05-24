import { environment } from '../../environments/environment';
const valuesEndpoint = `${environment.apiHost}/api/values`

export const getValues = async () => {
    var response = await fetch(valuesEndpoint)
    return await response.json()
}