import axios, {AxiosPromise} from "axios";
import {chatHistoryRequest} from "./interface";
import {IChatMessage} from "../../commonInterface";


export const getChatHistory = ({authData, params}: chatHistoryRequest): AxiosPromise<IChatMessage[]> => {
    return axios.create({
        baseURL: 'https://api.green-api.com/',
        headers: {
            'Content-type': 'application/json',
        },
        paramsSerializer: {
            indexes: null,
        },

    }).post(`waInstance${authData.idInstance}/getChatHistory/${authData.apiTokenInstance}`, {param: params})
}
