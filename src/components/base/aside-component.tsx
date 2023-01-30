import { Link } from "react-router-dom"

export const AsideComponent = () => {
    return (
        <aside className="d-flex w-100 flex-column">
            <div className="aside-logo">
                <img className="img-logo" src="../../shared/logo192.png"></img>
            </div>

            <div className="p-2 div-aside-link">
                <Link to="/home" className="text-white aside-link">
                    <i className="fa-solid fa-house me-2"></i>Home</Link>
            </div>
            <div className="p-2 div-aside-link">
                <Link to="/table" className="text-white aside-link">Table</Link>
            </div>
            <div className="p-2 div-aside-link">
                <Link to="/add-person" className="text-white aside-link">Add Person</Link>
            </div>
        </aside>)
}