import React from 'react';
import {Button, List} from "antd";
import * as child_process from "child_process";
import * as fs from "fs";

export interface ShortChatListItem {
    senderPhone: string
}
const ModalChatListItem: React.FC<ShortChatListItem> = ({senderPhone}, children: any) => {
    return (
        <List.Item>
            <List.Item.Meta
                title={<a>{senderPhone}</a>}
            />
            <Button onClick={children}/>
        </List.Item>
    );
};

export default ModalChatListItem;