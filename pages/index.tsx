import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useStore} from "../src/store";
import {FC} from "react";

const Home = () => {
  return (
    <main>
      <Transactions/>
    </main>
  )
}

const Transactions: FC = () => {
  const store = useStore()
  return store.transactions.length > 0 ? <section>
    pending transactions
  </section> : <p>nie ma mnie</p>
}

export default Home
