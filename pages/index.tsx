import { Layout } from "@/components";
import { CountdownTimer, HeroSection, Map, GuestModal, Hosts, Photos } from "@/scenes";
import { masonryImages } from "@/utils/images";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <GuestModal />
      <CountdownTimer />
      {/* <Hosts /> */}
      <Photos data={masonryImages} />
      <Map />
    </Layout>
  );
}
