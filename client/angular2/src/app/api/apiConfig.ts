import { isDevMode } from '@angular/core';

interface IApiConfig {
    apiHost:string
}

let ApiConfig:IApiConfig;

if (isDevMode()) {
    ApiConfig = {
        apiHost: 'http://localhost:5000'
    }
}
else{
    ApiConfig = {
        apiHost: window.location.origin
    }
}

export default ApiConfig