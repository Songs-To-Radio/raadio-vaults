import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radio Vaults</title>
      </Head>
      <LandingPage/>
    </div>
  );
}
