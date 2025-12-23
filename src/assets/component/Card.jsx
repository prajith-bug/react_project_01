function Card({name,occ,nameChange}) {
    return(
        <>
            <div>
                <h1>{name}</h1>
                <h2>{occ}</h2>
            </div>
            <button onClick={nameChange}>
                name change
            </button>
        </>
    )
}
export default Card 