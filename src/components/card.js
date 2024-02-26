export default function Card({ type, pictures, time, price, several }) {
    return (
        <li className="text-center p-4 m-2 w-60">
            <p className="text-lg">{type}</p>
            {!pictures ? "" : <span className="text-xs bg-green-100 p-1 rounded text-green-600">Minst {pictures} billeder</span>}
            {!time ? "" : <p>Op til {time} timer</p>}
            {!several ? <span>{price}</span> : <p>Starter ved <span>11995</span> kontakt for fulde pris.</p>}
            {!several ? "" : <p>Ved 2 personer <span>5000</span></p>}
        </li>
    )
}