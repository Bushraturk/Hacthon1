import Header from "./Component/Header";
import HeroSection from "./Component/Hero";
import TopHeader from "./Component/Topheader";
import NewArrivals from "./Component/Productlist";
import Arrivals from "./Component/Topselling";
import TestimonialCarousel from "./Component/Testi";
import NewsletterSubscription from "./Component/Newsletter";
import BrowseByDressStyle from "./Component/Dressstyle";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <HeroSection/>
      <NewArrivals/>
      <Arrivals/>
      <BrowseByDressStyle/>

      <TestimonialCarousel/>
      <NewsletterSubscription/>
      <Footer/>
    </div>
  );
}
