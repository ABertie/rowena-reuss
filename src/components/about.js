import Heading from "./headings";
import KitImage from "./kit-image";

export default function AboutMe() {

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 md:h-fit gap-8 py-8 my-32 bg-sec-light min-h-[500px]">
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
  )
}