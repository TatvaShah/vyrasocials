import { Header } from "@/components/header";
import { About, Experiences, Footer, Hero, Marquee, Moments, NextUp, Statement, Tickets, Watch } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <NextUp />
        <Experiences />
        <Statement />
        <Moments />
        <Watch />
        <About />
        <Tickets />
      </main>
      <Footer />
    </>
  );
}
