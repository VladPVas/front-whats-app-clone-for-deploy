import {DefaultLoginDataRequest} from "../../commonInterface";

export interface sendMessageRequest{
    authData: DefaultLoginDataRequest
    param: sendMessageParam
}

export interface sendMessageParam {
    chatId: string,
    message: string,
    quotedMessage?: string,
    archiveChat?: boolean,
    linkPreview?: boolean
}
