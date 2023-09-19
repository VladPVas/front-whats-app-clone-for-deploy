import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Sider from "antd/es/layout/Sider";
import {Button} from "antd";
import Contacts from "./Contacts/component/Contacts";
import {deleteApiTokenInstance, deleteIdInstance, getIdInstance} from "../../../shared/util/authLocalStorage";
import {FullscreenExitOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

interface ChatSiderProps {
    isAuth: boolean
    setIsAuth: Dispatch<SetStateAction<boolean>>
    setCurrentChatId: Dispatch<SetStateAction<string | undefined>>
}


const ChatSider: React.FC<ChatSiderProps> = ({isAuth, setIsAuth, setCurrentChatId}) => {
    const [currentUser, setCurrentUser] = useState<string>(() => {
        const idInstance = getIdInstance()
        if (idInstance) {
            return idInstance
        }
        return 'anonymous'
    });

    const handleOnClick = () => {
        deleteIdInstance()
        deleteApiTokenInstance()
        setIsAuth(false)
    }


    useEffect(() => {
        const idInstance = getIdInstance()
        if (idInstance) {
            setCurrentUser(idInstance)
        } else {
            setCurrentUser('anonymous')
        }
    }, [isAuth])

    return (
        <Sider style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            overflowY: 'scroll',
            background: "green"
        }}>
            <Title style={{marginRight: 'auto'}} level={5}>{currentUser}</Title>
            <Button
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}
                icon={<FullscreenExitOutlined/>}
                onClick={handleOnClick}/>
            <Contacts setCurrentChatId={setCurrentChatId}/>
        </Sider>
    )
};

export default ChatSider;
