import React, {useState} from 'react';
import {Button, Input} from "antd";
import {useAppDispatch, useAppSelector} from "../../../../../shared/util/hooksUtil";
import {getAuthData} from "../../../../../shared/util/authLocalStorage";
import {sendMessageParam} from "../../../../../shared/api/ChatMenu/SendMessage/interface";
import {sendMessageAction} from "../api";

interface SendMessageProps {
    currentChatId: string | undefined
}

const SendMessage: React.FC<SendMessageProps> = ({currentChatId}) => {
    const dispatch = useAppDispatch();
    const {} = useAppSelector(state => state.sendMessage)
    const [inputMessage, setInputMessage] = useState<string>('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    }

    const handleOnClick = () => {
        if (!currentChatId) return
        const param: sendMessageParam = {
            chatId: currentChatId,
            message: inputMessage
        }
        dispatch(sendMessageAction({authData: getAuthData(), param: param}))
    }
    return (
        <div>
            <Input
                value={inputMessage}
                onChange={handleOnChange}
            />
            <Button type={"primary"} onClick={handleOnClick}>Send</Button>
        </div>
    );
};

export default SendMessage;
