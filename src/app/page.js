import Banner from "./components/Banner";
import Cards from "./components/Cards";
import FlexibleWorkSpace from "./components/FlexibleWorkSpace";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Solution from "./components/Solution";
import Testimonial from "./components/Testimonial";
import TrustCompanies from "./components/TrustCompanies";
import Virtual from "./components/Virtual";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Cards />
      <FlexibleWorkSpace />
      <Solution />
      <Virtual />
      <TrustCompanies />
      <Testimonial />
      <Footer />
    </main>
  );
}
