export default function Button({btnName , classN,Fontaw}){
    return (
        <div>
            <button className={`btn btn-dark ${classN}`}>{btnName}{Fontaw}</button>
        </div>
    )
}