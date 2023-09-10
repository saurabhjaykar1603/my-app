export default function Button({btnName , classN}){
    return (
        <div>
            <button className={`btn btn-dark ${classN}`}>{btnName}</button>
        </div>
    )
}