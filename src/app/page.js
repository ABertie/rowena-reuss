import Carousel from "@/components/carousel";
import Heading from "@/components/headings";
import ToMail from "@/components/to-mail";
import Header from "@/components/header";
import KitImage from "@/components/kit-image";
import GetKit from "@/actions/kit-list";

export default async function Home() {
  // let images = await GetList("folder:RowenaReuss/carusel/*")
  let kit = await GetKit("/carousel/")

  return (
    <>
      <Header />
      <main>
        <Carousel images={kit}></Carousel>

        <section id="aboutme" className="container grid grid-cols-1 md:grid-cols-2 md:h-fit gap-8 py-8 my-32 bg-sec-light min-h-[500px]">
          <div className="md:h-[80vh] max-h-[500px] h-96 overflow-hidden flex items-center justify-center">
            <KitImage src="/IMG_9075.jpg" />
          </div>
          <article className="flex flex-col gap-4 justify-center">
            <Heading level="1">Hello my name is Rowena</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </section>

        <div id="contakt">
          <ToMail />
        </div>

        {/* <ul className="m-60 flex h-60">
        <li className="w-7/12 bg-prim-light"></li>
        <li className="w-4/12 bg-sec-light"></li>
        <li className="w-1/12 bg-[#c0a292]"></li>
      </ul>

      <div className="m-44 h-80">
        <div className="bg-prim-light p-8 pr-96 w-full h-full">
          <div className="bg-sec-light p-8 pt-44 pl-32 w-full h-full">
            <div className="bg-sec-dark w-full h-full"></div>
          </div>
        </div>
      </div> */}
        {/* <section className="text-center">
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
      </section> */}

      </main>
    </>
  )
}
