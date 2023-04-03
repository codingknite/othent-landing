import Head from 'next/head';
import Footer from '../components/Footer';
import Features from '../components/Features';
import { DemoGif } from '../components/common';
import HowItWorks from '../components/HowItWorks';
import SDKSection from '../components/SDKSection';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import WeaveTransfer from '../components/WeaveTransfer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Othent</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroSection />
        <DemoGif>
          <img src='/demo-gif.gif' alt='demo-gif' />
        </DemoGif>
        <Features
          type='mission'
          textSmall='Our mission is to'
          headerText='Empower 5 Billion Web2 users with a robust gateway to Web3'
        />
        <WeaveTransfer />
        {/* TODO: WEAVE TRANSFER SECTION */}
        <Features
          type='simplicity'
          textSmall='Ease matters to us'
          headerText="Simplicity is key, keys aren't simplicity"
        />
        <HowItWorks />
        <SDKSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
