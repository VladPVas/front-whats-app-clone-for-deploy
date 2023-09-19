export interface DefaultLoginDataRequest {
    idInstance: string | undefined | null,
    apiTokenInstance: string | undefined | null
}

export interface IChatMessage {
    type: string,
    timestamp: number,
    idMessage: string,
    statusMessage?: string,
    typeMessage: string,
    chatId: string,
    senderId?: string,
    senderName?: string,
    textMessage?: string,
    downloadUrl?: string,
    caption?: string,
    location?: ILocation,
    contact?: IContact,
    extendedTextMessage?: IExtendedTextMessage
}

export interface ILocation {
    nameLocation: string,
    address: string,
    latitude: number,
    longitude: number,
    jpegThumbnail: string
}

export interface IContact {
    displayName: string,
    vcard: string
}

export interface IExtendedTextMessage {
    text: string,
    description: string,
    title: string,
    previewType: string,
    jpegThumbnail: string
}
