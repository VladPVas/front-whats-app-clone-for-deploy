import axios, {AxiosPromise} from "axios";
import {IContact} from "./interface";
import {DefaultLoginDataRequest} from "../../commonInterface";

export const getContacts = ({idInstance, apiTokenInstance}: DefaultLoginDataRequest): AxiosPromise<IContact[]> => {
    return axios.create({
        baseURL: 'https://api.green-api.com/',
        headers: {
            'Content-type': 'application/json',
        },
        paramsSerializer: {
            indexes: null,
        },
    }).get(`waInstance${idInstance}/getContacts/${apiTokenInstance}`);
}
