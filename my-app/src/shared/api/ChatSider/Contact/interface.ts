import {DefaultLoginDataRequest} from "../../commonInterface";

export interface contactLastMessageRequest {
    authData: DefaultLoginDataRequest
    chatId: string
}

export interface contactLastMessageParams {
    chatId: string,
    count: number
}
