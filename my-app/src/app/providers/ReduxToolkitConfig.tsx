
import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./store";

interface ReduxToolkitProps {
    children: React.ReactNode;
}

const ReduxToolkitConfig: React.FC<ReduxToolkitProps> = ({ children }: ReduxToolkitProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxToolkitConfig;
