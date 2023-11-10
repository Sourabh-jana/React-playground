const Card = ({ id, title, body}) => {
  return (
    <div className="border rounded-lg px-3 py-2">
        <h1 className="text-gray-300 text-3xl">{id}</h1>
        <p className="text-lg font-semibold font-sans mb-1">{title}</p>
        <p className="text-sm font-mono font-thin">{body}</p>
    </div>
  )
}

export default Card
