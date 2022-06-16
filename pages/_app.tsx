import {AppProps} from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Head from 'next/head'

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>todo_app</title>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
};

export default App;