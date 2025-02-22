import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import SectionHeaders from "@/app/components/layout/SectionHeaders"; // Fixed import path

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      
      {/* Fixed section tag wrapping SectionHeaders */}
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
      
      <div className="max-w-md mx-auto mt-4 text-gray-500 flex-col gap-4">
      <p>
        something about the page in 200 words</p>
      <p>another 100 words</p>
      <p>another 50 words</p>
      
      </div></section>

      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={"Don\'t hesitate"}
          mainHeader={"contact us"} 
          />
          <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel: +91 7008527219">+91 7008527219</a>
          </div>
      </section>

      <footer className="border-t p-8 text-gray-500 mt-16">
        &copy; 2025 All Rights Reserved

      </footer>
    </>
  );
}
