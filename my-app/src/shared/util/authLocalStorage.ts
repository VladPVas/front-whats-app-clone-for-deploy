export const ID_INSTANCE = "IdInstance";
export const API_TOKEN_INSTANCE = "ApiTokenInstance";

export const getIdInstance = (): string | null => {
    return localStorage.getItem(ID_INSTANCE);
}

export const getApiTokenInstance = (): string | null => {
    return localStorage.getItem(API_TOKEN_INSTANCE);
}

export const setIdInstance = (id: string) => {
    localStorage.setItem(ID_INSTANCE, id);
}

export const setApiTokenInstance = (token: string) => {
    localStorage.setItem(API_TOKEN_INSTANCE, token);
}

export const deleteIdInstance = () => {
    localStorage.removeItem(ID_INSTANCE);
}
export const deleteApiTokenInstance = () => {
    localStorage.removeItem(API_TOKEN_INSTANCE)
}

export const getAuthData = () => {
    return {
        idInstance: getIdInstance(),
        apiTokenInstance: getApiTokenInstance()
    }
}
