import axios, {AxiosPromise} from "axios";
import {DefaultLoginDataRequest} from "../commonInterface";

export const signIn = ({idInstance, apiTokenInstance}: DefaultLoginDataRequest): AxiosPromise<string> => {
    return axios.create({
        baseURL: 'https://api.green-api.com/',
        headers: {
            'Content-type': 'application/json',
        },
        paramsSerializer: {
            indexes: null,
        },
    }).get(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
}
