import '../styles/globals.css'
import {BlockchainStore, StoreProvider} from "../src/store";

const store = new BlockchainStore()


function MyApp({Component, pageProps}) {
    return (
        <StoreProvider store={store}>
            <Component {...pageProps} />
        </StoreProvider>
    )
}

export default MyApp
