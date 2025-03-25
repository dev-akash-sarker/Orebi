import Ads from "./components/home/ads";
import Banner from "./components/home/banner/Banner";
import Information from "./components/home/information";

export default function Home() {
  return (
    <div>
      <Banner />
      <Information />
      <Ads />
    </div>
  );
}
