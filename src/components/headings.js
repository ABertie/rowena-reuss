export default function Heading({ children, level = "2", className }) {
    switch (level) {
        case "1":
            return <h1 className={`font-bold text-sec-dark text-3xl ${className}`}>{children}</h1>
        case "2":
            return <h2 className={`font-bold text-sec-dark text-2xl ${className}`}>{children}</h2>
        case "3":
            return <h3 className={`font-bold text-sec-dark text-lg ${className}`}>{children}</h3>
        // case "4":
        //     return <h4 className="font-serif text-indigo-dark font-bold text-2xl">{children}</h4>
        // case "5":
        //     return <h5 className="font-serif text-indigo-dark font-bold text-2xl">{children}</h5>
        // case "6":
        //     return <h6 className="font-serif text-indigo-dark font-bold text-2xl">{children}</h6>
    }
}