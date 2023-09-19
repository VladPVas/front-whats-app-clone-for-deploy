import React from 'react';
import {List} from "antd";
import {IChatMessage} from "../../../../shared/api/commonInterface";

interface ChatMessageProps {
    message: IChatMessage
}

const ChatMessage: React.FC<ChatMessageProps> = ({message}) => {
    return (
        <List.Item>
            // TODO добавить аватар
            // TODO добавить инверсию сообщений
            <List.Item.Meta
                title={message.senderName}
                description={`${message.textMessage}  ${new Date(message.timestamp)}`}
            />
        </List.Item>
    );
};

export default ChatMessage;
