import Heading from "@/components/headings";

export default function PageNotFound() {
    return (
        <main className="grid sm:grid-cols-2 m-8 md:mx-32 ">
            <img src="./error.svg" alt="" className="xs:w-1/2 sm:w-full" />
            <section className="flex flex-col gap-4 justify-center">
                <Heading level="1">Page not found</Heading>
                <p>The page you are looking for might be removed or is temporarily unavailabe</p>
                <p>Come back later</p>
            </section>
        </main>
    )
}