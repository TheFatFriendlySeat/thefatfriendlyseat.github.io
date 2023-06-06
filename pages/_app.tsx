// libraries
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { IconContext } from "react-icons";

import '../styles/global.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    // this is a hack to get types working :(
    // https://stackoverflow.com/questions/71809903/next-js-component-cannot-be-used-as-a-jsx-component
    const AnyComponent = Component as any;

    return (
        <IconContext.Provider value={{ className: "icon", size: "25px" }}>
            <SessionProvider session={session}>
                <AnyComponent {...pageProps} />
            </SessionProvider>
        </IconContext.Provider>
    );
};

export default App;