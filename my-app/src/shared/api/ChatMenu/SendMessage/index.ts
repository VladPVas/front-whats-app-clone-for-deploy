import axios, {AxiosPromise} from "axios";
import {sendMessageRequest} from "./interface";


export const sendMessage = ({authData, param}: sendMessageRequest): AxiosPromise<string> => {
    return axios.create({
        baseURL: 'https://api.green-api.com/',
        headers: {
            'Content-type': 'application/json'
        },
        paramsSerializer: {
            indexes: null
        }
    }).post(`waInstance${authData.idInstance}/sendMessage/${authData.apiTokenInstance}`, param)
}
