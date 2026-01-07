import HeroSlider from "../Components/HeroSlider";
import CategorySection from "../Components/CategorySection";
import BrowseLatestGrid from "../Components/BrowseLatestGrid";
import HomeProductSlider from "../Components/HomeProductSlider";
import VideoSection from "../Components/VideoSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategorySection />
      <VideoSection/>
      <BrowseLatestGrid />
      <HomeProductSlider />
    </>
  );
}
