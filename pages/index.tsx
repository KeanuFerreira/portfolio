import type {NextPage} from 'next'
import React from 'react'
import styles from '../styles/home/Home.module.css'
import Header from "../src/home/header/Header";
import Footer from "../src/home/footer/Footer";
import Body from '../src/home/body/Body'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home
