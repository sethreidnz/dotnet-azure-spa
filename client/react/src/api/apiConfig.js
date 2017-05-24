console.log(process.env)
let ApiConfig = {
    host: process.env.API_HOST ? process.env.API_HOST : window.location.origin
}
console.log(ApiConfig)

export default ApiConfig