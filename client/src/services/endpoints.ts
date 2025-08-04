

interface Endpoints {
    AUTH:{
        REGISTER: string;
        LOGIN: string;
        ME: string;
    }
}


export const ENDPOINTS: Endpoints = {
    AUTH:{
        REGISTER: '/api/auth/register',
        LOGIN: '/api/auth/login',
        ME: '/api/auth/me',
    }
}