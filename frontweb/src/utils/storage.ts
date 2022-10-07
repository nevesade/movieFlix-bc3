const tokenKey = 'authData';

type LoginResponse = {

    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
    userFirstName: string;
    userId: number;

}
export const saveAuthData = (obj: LoginResponse) => {
    //JSON.stringify(obj) -> transformar json em text
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}



export const getAuthData = () => {
    // ?? operador de qualisenciença nulla
    const str = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(str) as LoginResponse;
}

export const removeAuthData = () => {
    localStorage.removeItem(tokenKey);
}