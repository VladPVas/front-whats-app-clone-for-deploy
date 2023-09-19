import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, Form, Input, notification} from "antd";
import FormItem from "antd/es/form/FormItem";
import {signInAction} from "../api";
import {useAppDispatch} from "../../../../shared/util/hooksUtil";
import {setApiTokenInstance, setIdInstance} from "../../../../shared/util/authLocalStorage";

interface AuthFormProps{
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

const AuthForm: React.FC<AuthFormProps> = ({setIsAuth}) => {
    const dispatch = useAppDispatch();
    const [inputData, setInputData] = useState<{ apiTokenInstance: string, idInstance: string }>({
        apiTokenInstance: '',
        idInstance: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onClick = () => {
        dispatch(signInAction(inputData)).then((result: any) => {
            if (result.payload && result.payload.stateInstance === "authorized") {
                if (inputData.apiTokenInstance && inputData.idInstance) {
                    setApiTokenInstance(inputData.apiTokenInstance)
                    setIdInstance(inputData.idInstance)
                    setIsAuth(true)
                }
            } else {
                notification.error({
                    message: "Error",
                    description: "Bad credentials"
                })
            }
        })
    }

    return (
        <Form>
            <FormItem>
                <Input
                    onChange={onChange}
                    name={'idInstance'}
                    value={inputData.idInstance}
                    placeholder={'Input Id instance'}/>
            </FormItem>
            <FormItem>
                <Input
                    onChange={onChange}
                    name={'apiTokenInstance'}
                    value={inputData.apiTokenInstance}
                    placeholder={'Input api token instance'}/>
            </FormItem>
            <FormItem>
                <Button
                    onClick={onClick}
                    type={"primary"}>Submit</Button>
            </FormItem>
        </Form>
    )
};

export default AuthForm;
