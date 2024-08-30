import Header from "@/components/header";
import Carousel from "@/components/carousel";
import About from "@/components/about";
import ToMail from "@/components/to-mail";
import Footer from "@/components/footer";

import GetKit from "@/actions/kit-list";
import { createClient } from "@/prismicio";
import MainNav from "@/components/mainNav";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home_page")
  const kit = await GetKit("/carousel/")

  // console.log(page.data.slices[0].primary);

  return (
    <>
      <Header>
        <MainNav />
      </Header>
      <main>
        <Carousel images={kit}></Carousel>

        <SliceZone
          slices={page.data.slices}
          components={{
            about: (item) => <About Primary={item.slice.primary} />,
          }}
        />

        <div id="contakt">
          <ToMail />
        </div>

      </main>
      <Footer />
    </>
  )
}


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