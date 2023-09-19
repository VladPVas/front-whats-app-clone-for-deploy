import React, {useEffect, useState} from 'react';
import {Layout} from "antd";
import ChatSider from "./ChatSider/ChatSider";
import {getApiTokenInstance, getIdInstance,} from "../../shared/util/authLocalStorage";
import {Content} from "antd/es/layout/layout";
import AuthForm from "./AuthMenu/component/authForm";
import ChatMenu from "./ChatMenu/component/ChatMenu";

const MainForm = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [currentChatId, setCurrentChatId] = useState<string>();

    useEffect(() => {
        if (getApiTokenInstance() && getIdInstance()) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [isAuth])

    // TODO добавить адекватное отображение на странице, если currentChat undefined
    return (
        <Layout style={{height: '100vh'}}>
            <ChatSider isAuth={isAuth} setIsAuth={setIsAuth} setCurrentChatId={setCurrentChatId}/>
            <Layout>
                <Content style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {isAuth ? (currentChatId
                            ? (<ChatMenu currentChatId={currentChatId}/>)
                            : null)
                        : <AuthForm setIsAuth={setIsAuth}/>}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainForm;
