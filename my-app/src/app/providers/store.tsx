import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import signInSlice from "../../entity/main/AuthMenu/api";
import sendMessageSlice from "../../entity/main/ChatMenu/SendMessage/api"
import getChatHistorySlice from "../../entity/main/ChatMenu/api/ChatHistory";
import getContactsSlice from "../../entity/main/ChatSider/Contacts/api";
import {getContactLastMessage} from "../../shared/api/ChatSider/Contact";
import getContactLastMessageSlice from "../../entity/main/ChatSider/Contact/api";
export const store = configureStore({
    reducer: {
        signIn: signInSlice.reducer,
        getContacts: getContactsSlice.reducer,
        getContactLastMessage: getContactLastMessageSlice.reducer,
        getChatHistory: getChatHistorySlice.reducer,
        sendMessage: sendMessageSlice.reducer,
    }
})


