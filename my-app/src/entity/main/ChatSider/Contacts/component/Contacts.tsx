import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {List} from "antd";
import Contact from "../../Contact/component/Contact";
import {useAppDispatch, useAppSelector} from "../../../../../shared/util/hooksUtil";
import {getContactsAction} from "../api";
import {getAuthData} from "../../../../../shared/util/authLocalStorage";

interface chatListProps {
    setCurrentChatId: Dispatch<SetStateAction<string | undefined>>
}

const Contacts: React.FC<chatListProps> = ({setCurrentChatId}) => {
    const dispatch = useAppDispatch();
    const {data, isLoading} = useAppSelector(state => state.getContacts)

    useEffect(() => {
        dispatch(getContactsAction(getAuthData()))
    }, [])
    return (
        //TODO добавить проверку, что если контакты существуют, то выводить список, иначе вызывать меню с надписью нет контактов
        data ? (<List
            itemLayout="horizontal"
            loading={isLoading}
            dataSource={data}
            renderItem={(contact) => (
                <Contact setCurrentChatId={setCurrentChatId} contact={contact}/>
            )}
        />) : null
    )
};

export default Contacts;
