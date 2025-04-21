import About from "@/components/About";
import Cardlist from "@/components/Cardlist";
import Cards2Kosina from "@/components/Cards2Kosina";
import CardsList from "@/components/CardsList";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import References from "@/components/References";
import Statistika from "@/components/Statistika";
import { cards2Data } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About />
      <CardsList />
      <Cards2Kosina title={"Zašto izabrati nas?"} data={cards2Data} />
      <Statistika />
      <Cardlist />
      <PozoviteNasOdmahImage />
      <References />
    </div>
  );
}
