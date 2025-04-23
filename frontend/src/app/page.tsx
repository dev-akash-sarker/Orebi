import Ads from "./components/home/ads";
import Banner from "./components/home/banner/Banner";
import Information from "./components/home/information";
import Newarrivel from "./components/home/newarrivel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <Information />
      <Ads />
      <Newarrivel />
    </div>
  );
}
