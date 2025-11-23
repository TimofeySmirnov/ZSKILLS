export class JWTUtils {
    static getToken() {
        return localStorage.getItem('token')
    }

    static setToken(token: string) {
        return localStorage.setItem('token', token)
    }

    static removeToken() {
        localStorage.removeItem('token')
    }
}