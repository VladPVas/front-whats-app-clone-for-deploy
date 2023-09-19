import React from 'react';

import Routing from "../page/routing";
import Providers from "./providers/providers";

function App() {
    return (
        <Providers>
            <Routing/>
        </Providers>
    );
}

export default App;
