import React from 'react';
import {List} from "antd";
import ModalChatListItem, {ShortChatListItem} from "./ModalChatListItem/ModalChatListItem";

interface ShortChatList {
    data: ShortChatListItem[]
    message: string
}
const ModalChatList: React.FC<ShortChatList> = ({message, data}) => {

    // const forwardMessage = (addressat: string) = {
    //
    // }

    return (
        <List className='ChatList'
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index)=> (
                  <ModalChatListItem senderPhone={item.senderPhone} key={index}/>
              )}
        />
    );
};

export default ModalChatList;