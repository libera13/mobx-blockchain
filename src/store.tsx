import { makeAutoObservable } from "mobx";
import sha256 from "crypto-js/sha256";
import {createContext, useContext, useEffect, FC, FunctionComponent} from "react";

interface  IBlock {
    hash: string;
    transactions: Array<String>;
}

class BlockchainStore {
    block: Array<IBlock> = [];
    transactions: Array<String> = ['start'];
    constructor() {
        makeAutoObservable(this)
    }

    addTransaction(message: string) {
        this.transactions.push(message)
    }
}

const StoreContext = createContext<BlockchainStore>(new BlockchainStore());

const StoreProvider: FunctionComponent<{store: BlockchainStore}> = ({store, children}) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
const useStore = () => {
    return useContext(StoreContext)
}

export { BlockchainStore, StoreProvider, useStore };
