import Head from "next/head";

import { Layout } from "@/components";
import { CountdownTimer, HeroSection, Map, GuestModal, Photos } from "@/scenes";
import { masonryImages } from "@/utils/images";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>🇰🇿 Нурболат 💍 Хэуон 🇰🇷</title>
      </Head>
      <HeroSection />
      <GuestModal />
      <CountdownTimer />
      <Photos data={masonryImages} />
      <Map />
    </Layout>
  );
}
