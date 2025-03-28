import Banner from "@/components/banner";
import { bannerImage } from "@/public/images";
import Title from "../../../../components/title";
import faqs from "../_data/faq";
import FaqItem from "./faq-item";
import Header from "../../_layout/header";
import Footer from "../../_layout/footer";
export default function FaqPage() {
  return (
    <main className="relative box-border flex flex-col items-center justify-center">
      <Header />
      <Banner
        title="Faqs Center"
        image={bannerImage.faq}
        description="Welcome to Demarket Guide - Cardano test platform on-chain NFT Marketplace. Lets build and connect with the community together in the world."
      />
      <Title />
      <section className="mx-auto my-0 flex w-full max-w-[1024px] flex-wrap justify-between py-2 text-left">
        {faqs.map(function (faq, index: number) {
          return <FaqItem index={index} key={index} Children={faq.Children} title={faq.title} />;
        })}
      </section>
      <Footer />
    </main>
  );
}
