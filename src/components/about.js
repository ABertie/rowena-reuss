import Heading from "./headings";
import KitImage from "./kit-image";

export default function About({ Primary }) {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 md:h-fit gap-8 py-8 my-32 bg-dark min-h-[500px]">
      <div className="md:h-[80vh] max-h-[500px] h-96 overflow-hidden flex items-center justify-center">
        <KitImage src={Primary.image} />
      </div>
      <article className="flex flex-col gap-4 justify-center">
        <Heading level="1">{Primary.titel}</Heading>
        {Primary.text.map((item, i) => (
          <p key={i}>
            {item.paragraph}
          </p>
        ))}
      </article>
    </section>
  )
}