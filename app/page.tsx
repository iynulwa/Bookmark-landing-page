import Navigation from "./ui/navigation";
import Features from "./ui/features";
import ExtensionDownload from "./ui/download-extension";
import Faq from "./ui/faq";
import Footer from "./ui/footer";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main>
        <Navigation />
        <section className="flex items-center justify-center flex-col md:flex-row gap-4">
          <Image src="/illustration-hero.svg" alt="" width={350} height={350} />
          {/* <div>blue background stuff</div> */}
          <div>
            <h1 className="text-4xl font-bold text-center">A Simple bookmark manager</h1>
            <p className="text-width text-center md:text-left">
              A clean and simple interface to organize your 
              favourite websites. Open a new browser tab and see your
              sites load instantly. Try it for free.
            </p>
            <div className="flex items-center justify-center gap-4 my-4">
              <button className="py-5 px-4 rounded-lg bg-black">Get it in Chrome</button>
              <button className="py-5 px-4 rounded-lg bg-black">Get it in Firefox</button>
            </div>
          </div>
        </section>
        <Features />
        <ExtensionDownload />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}