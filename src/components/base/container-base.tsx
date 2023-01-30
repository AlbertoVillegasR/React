import { Outlet } from "react-router-dom";
import { AsideComponent } from "./aside-component";
import { NavbarComponent } from "./navbar-component";

const ContainerBase = () => {
    return (
        <div className="d-flex h-100">
            <div id="aside" className="mr-auto" style={{width:"250px"}}>
                <AsideComponent />
            </div>
            <div className="d-flex flex-column w-100">
                <div id="navbar" className="mr-auto" style={{ height: "55px" }}>
                    <NavbarComponent />
                </div>
                <div className="mr-auto d-flex h-100 overflow-auto">
                    <Outlet></Outlet>
                    {/* <h1 className="m-auto text-white" >Hola Mundo</h1> */}
                </div>
            </div>
        </div>
    );
}

export default ContainerBase;