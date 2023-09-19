import React from 'react';
import ReduxToolkitConfig from "./ReduxToolkitConfig";
import RouterConfig from "./RouterConfig";

interface ProviderProps {
    children?: React.ReactNode
}

const Providers: React.FC<ProviderProps> = ({children}) => {
    return (
        <ReduxToolkitConfig>
            <RouterConfig>{children}</RouterConfig>
        </ReduxToolkitConfig>
    );
};

export default Providers;
