let ApiConfig = {}

if (process.env.NODE_ENV === 'production') {
    ApiConfig.apiHost = window.location.origin
}
else{
    ApiConfig.apiHost =  'http://localhost:5000'
}

export default ApiConfig