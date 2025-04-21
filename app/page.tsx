import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import CardsList from "@/components/CardsList";
import HeroOneImg from "@/components/HeroOneImg";
import HomePage from "@/components/HomePage";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import References from "@/components/References";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <HomePage />
      <About />
      <Cardlist />
      <CardsList />
      <PozoviteNasOdmahImage />
      <References />
      {/* <Cards1 title={"dodaj naslov"} data={cards1Data} />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards2Kosina
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      /> */}
      <BackgroundImage />
    </div>
  );
}
