import React, {useEffect} from 'react';
import ChatMessage from "../ChatMessage/ChatMessage";
import {useAppDispatch, useAppSelector} from "../../../../shared/util/hooksUtil";
import {List} from "antd";
import SendMessage from "../SendMessage/component/SendMessage";
import {getChatHistoryAction} from "../api/ChatHistory";
import {getAuthData} from "../../../../shared/util/authLocalStorage";
import {chatHistoryParam} from "../../../../shared/api/ChatMenu/ChatHistory/interface";

interface ChatMenuProps {
    currentChatId: string | undefined
}

const ChatMenu: React.FC<ChatMenuProps> = ({currentChatId}) => {
    const dispatch = useAppDispatch()

    const {data: chatHistoryData, isLoading: chatHistoryIsLoading} = useAppSelector(state => state.getChatHistory)

    useEffect(() => {
        if (!currentChatId) return
        const params: chatHistoryParam = {
            chatId: currentChatId,
        }
        dispatch(getChatHistoryAction({authData: getAuthData(), params: params}));
    }, [currentChatId])

    return (
        <div>
            {/*// TODO вместо дефолтного лоадинга Skeleton*/}

            {/*// Я использовал List для более простого отображения,*/}
            {/*// ты пытался сделать с помощью Card, как вариант неплохо,*/}
            {/*// когда будем уверены, что функционал работает, можем перейти к данному варианту*/}
            <List
                loading={chatHistoryIsLoading}
                itemLayout="horizontal"
                dataSource={chatHistoryData}
                renderItem={(message) => (
                    <ChatMessage message={message}/>
                )}
            />
            <SendMessage currentChatId={currentChatId}/>
        </div>


    );
};

export default ChatMenu;
