import React from 'react';
import {Modal} from "antd";
import ModalChatList from "../ModalChatList/ModalChatList";

const ModalForward = (isModalOpen: boolean) => {
    return (
        <Modal title="ForwardMessage" open={isModalOpen}>
            {/*<ModalChatList />*/}
        </Modal>
    );
};


export default ModalForward;