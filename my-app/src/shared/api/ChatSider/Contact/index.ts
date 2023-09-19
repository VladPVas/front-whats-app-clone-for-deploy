import {contactLastMessageParams, contactLastMessageRequest} from "./interface";
import axios, {AxiosPromise} from "axios";
import {IChatMessage} from "../../commonInterface";

export const getContactLastMessage = ({
                                          authData,
                                          chatId
                                      }: contactLastMessageRequest): AxiosPromise<IChatMessage[]> => {

    const params: contactLastMessageParams = {
        chatId: chatId,
        count: 1
    }

    return axios.create({
        baseURL: 'https://api.green-api.com/',
        headers: {
            'Content-type': 'application/json',
        },
        paramsSerializer: {
            indexes: null,
        },
    }).post(`waInstance${authData.idInstance}/getChatHistory/${authData.apiTokenInstance}`, {params: params})
}
