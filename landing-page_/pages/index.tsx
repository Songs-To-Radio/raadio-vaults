import Head from 'next/head'
import Image from 'next/image'
import LandingPage from "../components/LandingPage";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`overflow-x-hidden`}>
      <Head>
        <title>RADIO VAULTS</title>
      </Head>
      <LandingPage/>
    </div>
  );
}