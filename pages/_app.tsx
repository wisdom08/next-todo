import {AppProps} from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Head from 'next/head'
import Header from "../components/Header";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>todo_app</title>
            </Head>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps}/>
        </>
    )
};

export default App;