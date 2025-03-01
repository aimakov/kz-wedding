import { Layout, CountdownTimer, HeroSection, GoogleMap, GuestModal, Hosts, Masonry } from "@/components";
import { masonryImages } from "@/utils/images";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <GuestModal />
      <CountdownTimer />
      {/* <Hosts /> */}
      <Masonry data={masonryImages} />
      <GoogleMap />
    </Layout>
  );
}
