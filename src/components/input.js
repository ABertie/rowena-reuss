export default function Input({ type, name, placeholder, className}) {
    return (
        <label className={`text-sec-light ${className}
        *:bg-white *:py-2 *:px-4 *:text-sec-dark *:w-full h-full `}>
            {placeholder}:
            {type === "textarea"
                ? <textarea name={name}
                    className="resize-none h-[calc(100%-2rem)] md:h-[calc(100%-1.5rem)]"></textarea>
                : <input type={type} name={name} />}
        </label>
    )
}