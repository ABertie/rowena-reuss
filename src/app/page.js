import Card from "@/components/card";
// import Cloud from "@/components/images";
import GetList from "@/actions/img-list";
import Carousel from "@/components/carousel";

export default async function Home() {
  let images = await GetList("folder:test/carusel/*")
  // console.log(images);
  return (
    <main>
      <Carousel images={images?.resources}></Carousel>
      {/* <ul className="m-60 flex h-60">
        <li className="w-7/12 bg-[#eae2d9]"></li>
        <li className="w-4/12 bg-[#89938b]"></li>
        <li className="w-1/12 bg-[#c0a292]"></li>
      </ul>

      <div className="m-44 h-80">
        <div className="bg-[#eae2d9] p-8 pr-96 w-full h-full">
          <div className="bg-[#2F4C51] p-8 pt-44 pl-32 w-full h-full">
            <div className="bg-[#C0A292] w-full h-full"></div>
          </div>
        </div>
      </div> */}
      <section className="text-center">
        <h1>Prisliste</h1>

        <div>
          <h2>Foto Session på location<span>(Familie, Konfirmation osv.)</span></h2>
          <p>Starter på <span>495</span> derefter for:</p>
          <ul className="flex justify-center gap-8">
            <li>5 filer: <span>1000</span></li>
            <li>10 filer: <span>1750</span></li>
            <li>20 filer: <span>2595</span></li>
            <li>Alle filer: <span>2995</span></li>
          </ul>
        </div>

        <h2>Bryllup</h2>
        <ul className="flex">
          <Card type="Potrætter" pictures="100" time="2" price="4995" />
          <Card type="Forberedelse + Vielse + Potrætter" pictures="200" time="4" price="5995" />
          <Card type="Forberedelse + Vielse + Potrætter + Recception + Første del af festen" pictures="350" time="8" price="8995" />
          <Card type="Heldags Bryllup" several={true} />
        </ul>
      </section>


    </main>
  )
}
