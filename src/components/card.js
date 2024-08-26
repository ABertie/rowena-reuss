export default function Card({ type, pictures, time, price, several }) {
    return (
        <li className="text-center p-4 m-2 w-60 bg-light rounded">
            <p className="text-lg">{type}</p>
            {!pictures ? "" : <span className="text-xs bg-dark px-3 p-1 rounded text-lightest">Minst {pictures} billeder</span>}
            {!time ? "" : <p>Op til {time} timer</p>}
            {!several ? <span className="text-mid">{price}</span> : <p>Starter ved <span className="text-mid">11995</span> kontakt for fulde pris.</p>}
            {!several ? "" : <p>Ved 2 personer <span className="text-mid">5000</span></p>}
        </li>
    )
}