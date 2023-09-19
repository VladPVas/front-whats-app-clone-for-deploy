import React, {Dispatch, SetStateAction} from 'react';
import {Button, List} from "antd";
import {IContact} from "../../../../../shared/api/ChatSider/Contacts/interface";

interface contactProps {
    contact: IContact
    setCurrentChatId: Dispatch<SetStateAction<string | undefined>>
}

const Contact: React.FC<contactProps> = ({contact, setCurrentChatId}) => {

    // TODO Придумать, что-то с lastMessage, слишком много запросов
    // const dispatch = useAppDispatch();
    // const {data, isLoading} = useAppSelector(state => state.getContactLastMessage)
    //
    // useEffect(() => {
    //     dispatch(getContactLastMessageAction({authData: getAuthData(), chatId: contact.id}));
    // }, [])

    const handleOnClick = () => {
        setCurrentChatId(contact.id);
    }

    return (
        // TODO добавить Skeleton из antd если isLoading, придумать, что отображть, когда нет последнего сообщения (кнопка начать чат и тд)
        <List.Item
            // TODO добавить кнопку стереть чат с помощью List.Item actions
        >
            <List.Item.Meta
                title={<Button onClick={handleOnClick}>{contact.name}</Button>}
                // description={data && data[0] && data[0].textMessage
                //     ? (data[0].textMessage.length > 10
                //         ? data[0].textMessage.substring(0, 10)
                //         : data[0].textMessage)
                //     : 'No message'}
            />
        </List.Item>
    )
}

export default Contact;
