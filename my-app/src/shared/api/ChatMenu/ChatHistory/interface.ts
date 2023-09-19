import {DefaultLoginDataRequest} from "../../commonInterface";

export interface chatHistoryRequest {
    authData: DefaultLoginDataRequest
    params: chatHistoryParam
}

export interface chatHistoryParam {
    chatId: string
    count?: number
}
