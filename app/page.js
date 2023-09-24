import { Header, NavBar, Hero, MainAbout } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Hero />
        <MainAbout />
      </main>
    </>
  );
}
